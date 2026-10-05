import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/auth-dual';
import { sql } from '@/lib/db';
import { z } from 'zod';
import { cartEventEmitter } from '@/lib/sse-emitter';

export async function GET(req: Request) {
  const user = await getAuthenticatedUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const items = await sql`
      SELECT ci.id, ci.product_sku, ci.quantity, ci.size,
             p.name as product_name, p.base_price, p.slug, p.cad_type
      FROM cart_items ci
      LEFT JOIN products p ON ci.product_sku = p.sku_code
      WHERE ci.user_id = ${user.userId}
      ORDER BY ci.updated_at DESC
    `;
    return NextResponse.json({ cart: items });
  } catch (err) {
    console.error('Error fetching cart:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

const PostCartSchema = z.object({
  product_sku: z.string().min(1),
  quantity: z.number().int().min(1),
  size: z.string().min(1).default('M')
});

export async function POST(req: Request) {
  const user = await getAuthenticatedUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const parsed = PostCartSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error.issues }, { status: 400 });
    }
    
    const { product_sku, quantity, size } = parsed.data;

    await sql`
      INSERT INTO cart_items (user_id, product_sku, quantity, size)
      VALUES (${user.userId}, ${product_sku}, ${quantity}, ${size})
      ON CONFLICT (user_id, product_sku, size) 
      DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity, updated_at = CURRENT_TIMESTAMP
    `;

    cartEventEmitter.emit(`cart_update_${user.userId}`);

    const items = await sql`SELECT * FROM cart_items WHERE user_id = ${user.userId}`;
    return NextResponse.json({ success: true, cart: items });
  } catch (err) {
    console.error('Error updating cart:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

const DeleteCartSchema = z.object({
  id: z.number().int().optional(),
  product_sku: z.string().optional(),
  size: z.string().optional(),
  clearAll: z.boolean().optional()
});

export async function DELETE(req: Request) {
  const user = await getAuthenticatedUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const parsed = DeleteCartSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error.issues }, { status: 400 });
    }

    const { id, product_sku, size, clearAll } = parsed.data;

    if (clearAll) {
      await sql`DELETE FROM cart_items WHERE user_id = ${user.userId}`;
    } else if (id) {
      await sql`DELETE FROM cart_items WHERE id = ${id} AND user_id = ${user.userId}`;
    } else if (product_sku && size) {
      await sql`DELETE FROM cart_items WHERE product_sku = ${product_sku} AND size = ${size} AND user_id = ${user.userId}`;
    } else {
      return NextResponse.json({ error: 'Provide id, product_sku/size, or clearAll' }, { status: 400 });
    }

    cartEventEmitter.emit(`cart_update_${user.userId}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error deleting cart item:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
