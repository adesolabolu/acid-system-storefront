import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const productsResult = await sql`
      SELECT p.*, c.name as category_name, c.slug as category_slug,
             json_agg(pv.*) as variants
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN product_variants pv ON p.id = pv.product_id
      GROUP BY p.id, c.name, c.slug
      ORDER BY p.id ASC;
    `;

    const products = productsResult.map(p => ({
      ...p,
      price: Number(p.base_price),
      category: p.category_name || 'Uncategorized',
      isSoldOut: !p.in_stock,
      edition: p.badge || 'NEW',
      tag: p.badge || 'NEW',
      visualType: p.cad_type,
      telemetrySpec: p.telemetry_spec
    }));

    return NextResponse.json({ success: true, products });
  } catch (err) {
    console.error('Products API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
