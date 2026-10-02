import { sql } from '@/lib/db';
import ShopClient from '@/components/ShopClient';
import { Product } from '@/types';

export const revalidate = 0; // Disable static caching

export default async function ShopPage() {
  const productsResult = await sql`
    SELECT 
      p.*,
      c.name as category_name,
      COALESCE(
        json_agg(
          json_build_object(
            'id', v.id,
            'size_label', v.size_label,
            'sku_code', v.sku_code,
            'stock_quantity', v.stock_quantity
          )
        ) FILTER (WHERE v.id IS NOT NULL),
        '[]'
      ) as variants
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_variants v ON p.id = v.product_id
    GROUP BY p.id, c.name
    ORDER BY p.id ASC
  `;

  // Map to the Product type expected by our frontend components
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

  return <ShopClient products={products} />;
}
