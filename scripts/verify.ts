import { sql } from '../src/lib/db';

async function verify() {
  const p = await sql`SELECT COUNT(*) FROM products`;
  const v = await sql`SELECT COUNT(*) FROM product_variants`;
  console.log('Products:', p[0].count);
  console.log('Variants:', v[0].count);
}
verify();
