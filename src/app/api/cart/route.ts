import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { sql } from '@/lib/db';

export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ cart: [] }, { status: 401 });
  }

  try {
    const result = await sql`SELECT cart_data FROM users WHERE email = ${session.user.email}`;
    const cartData = result.length > 0 && result[0].cart_data ? result[0].cart_data : [];
    
    return NextResponse.json({ cart: cartData });
  } catch (err) {
    console.error('Error fetching cart:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { cart } = await req.json();
    
    if (!Array.isArray(cart)) {
      return NextResponse.json({ error: 'Invalid cart data' }, { status: 400 });
    }

    await sql`
      UPDATE users 
      SET cart_data = ${JSON.stringify(cart)}::jsonb 
      WHERE email = ${session.user.email}
    `;
    
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error updating cart:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
