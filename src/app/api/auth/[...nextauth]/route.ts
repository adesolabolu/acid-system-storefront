import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { sql } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/brevo";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    async signIn({ user }) {
      if (user.email) {
        try {
          const existingUser = await sql`SELECT id FROM users WHERE email = ${user.email} LIMIT 1`;

          await sql`
            INSERT INTO users (email, name, image)
            VALUES (${user.email}, ${user.name}, ${user.image})
            ON CONFLICT (email) DO UPDATE
            SET name = EXCLUDED.name, image = EXCLUDED.image;
          `;

          if (existingUser.length === 0) {
            sendWelcomeEmail(user.email, user.name || 'OPERATOR').catch(console.error);
          }
        } catch (e) {
          console.error("Error syncing user to DB:", e);
        }
      }
      return true;
    },
    async session({ session }) {
      if (session.user?.email) {
        try {
          const dbUser = await sql`SELECT id FROM users WHERE email = ${session.user.email} LIMIT 1`;
          if (dbUser.length > 0) {
            (session.user as any).id = dbUser[0].id;
          }
        } catch (e) {
          console.error("Error fetching user ID for session:", e);
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
