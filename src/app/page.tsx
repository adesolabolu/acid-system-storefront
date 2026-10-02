import { sql } from '@/lib/db';
import ClientStorefront from '@/components/ClientStorefront';
import { Product } from '@/types';

export const revalidate = 0;

export default async function Page() {
  const productsResult = await sql`
    SELECT p.*, c.name as category_name, c.slug as category_slug,
           json_agg(pv.*) as variants
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_variants pv ON p.id = pv.product_id
    GROUP BY p.id, c.name, c.slug
    ORDER BY p.id ASC;
  `;

  // Map database format to expected Product type for frontend
  const products = productsResult.map(p => ({
    ...p,
    price: Number(p.base_price),
    category: p.category_name || 'Uncategorized',
    isSoldOut: !p.in_stock,
    edition: p.badge || 'NEW',
    tag: p.badge || 'NEW',
    visualType: p.cad_type,
    telemetrySpec: p.telemetry_spec
  })) as any as Product[];

  return <ClientStorefront initialProducts={products} />;
}
