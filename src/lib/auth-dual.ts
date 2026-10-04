import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import jwt from 'jsonwebtoken';
import { sql } from '@/lib/db';

export async function getAuthenticatedUser(req: Request): Promise<{ userId: number; email: string } | null> {
  try {
    // 1. Check for Mobile JWT (Bearer Token)
    const authHeader = req.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;
      
      if (!secret) throw new Error('Missing JWT secret');
      
      try {
        const decoded = jwt.verify(token, secret) as { userId: number; email: string };
        if (decoded && decoded.userId && decoded.email) {
          return { userId: decoded.userId, email: decoded.email };
        }
      } catch (err) {
        console.error('JWT verification failed', err);
      }
    }

    // 2. Check for Web Session (NextAuth)
    const session = await getServerSession(authOptions);
    if (session?.user?.email) {
      // Look up user in DB
      const result = await sql`SELECT id, email FROM users WHERE email = ${session.user.email} LIMIT 1`;
      if (result.length > 0) {
        return { userId: result[0].id as number, email: result[0].email as string };
      } else {
        // Upsert user if they don't exist yet but have a valid session
        const insertResult = await sql`
          INSERT INTO users (email, name, image)
          VALUES (${session.user.email}, ${session.user.name || null}, ${session.user.image || null})
          ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, image = EXCLUDED.image
          RETURNING id, email
        `;
        return { userId: insertResult[0].id as number, email: insertResult[0].email as string };
      }
    }

    return null;
  } catch (err) {
    console.error('Error in dual auth:', err);
    return null;
  }
}
