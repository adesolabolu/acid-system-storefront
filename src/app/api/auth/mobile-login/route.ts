import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import jwt from 'jsonwebtoken';

const MobileLoginSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
  image: z.string().url().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = MobileLoginSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error.issues }, { status: 400 });
    }
    
    const { email, name, image } = parsed.data;

    // Upsert user
    const result = await sql`
      INSERT INTO users (email, name, image) 
      VALUES (${email}, ${name || null}, ${image || null}) 
      ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, image = EXCLUDED.image 
      RETURNING id, email, name, image;
    `;
    
    const user = result[0];
    
    const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;
    if (!secret) {
      throw new Error('JWT configuration error');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      secret,
      { expiresIn: '30d' }
    );

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image
      }
    });
  } catch (err: any) {
    console.error('Mobile login error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
