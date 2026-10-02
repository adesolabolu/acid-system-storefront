import { sql } from '../src/lib/db';

async function seed() {
  console.log('Starting migration and seed process...');

  try {
    console.log('Dropping existing tables...');
    await sql`DROP TABLE IF EXISTS order_items, orders, product_variants, products, categories CASCADE;`;

    console.log('Creating categories table...');
    await sql`
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        slug VARCHAR(50) UNIQUE,
        display_order INT
      );
    `;

    console.log('Creating products table...');
    await sql`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        category_id INT REFERENCES categories(id),
        name VARCHAR(140),
        slug VARCHAR(140) UNIQUE,
        sku_code VARCHAR(50),
        base_price NUMERIC(12, 2),
        currency VARCHAR(3) DEFAULT 'NGN',
        badge VARCHAR(30),
        description TEXT,
        telemetry_spec VARCHAR(100),
        material VARCHAR(100),
        cad_type VARCHAR(50),
        in_stock BOOLEAN DEFAULT TRUE
      );
    `;

    console.log('Creating product_variants table...');
    await sql`
      CREATE TABLE product_variants (
        id SERIAL PRIMARY KEY,
        product_id INT REFERENCES products(id) ON DELETE CASCADE,
        size_label VARCHAR(20),
        sku VARCHAR(60) UNIQUE,
        price_modifier NUMERIC(12, 2) DEFAULT 0.00,
        inventory_count INT DEFAULT 20
      );
    `;

    console.log('Creating orders table...');
    await sql`
      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(120),
        customer_email VARCHAR(180),
        shipping_address JSONB,
        total_amount NUMERIC(12, 2),
        currency VARCHAR(3) DEFAULT 'NGN',
        status VARCHAR(30) DEFAULT 'confirmed',
        brevo_message_id VARCHAR(150),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;

    console.log('Creating order_items table...');
    await sql`
      CREATE TABLE order_items (
        id SERIAL PRIMARY KEY,
        order_id INT REFERENCES orders(id) ON DELETE CASCADE,
        product_id INT REFERENCES products(id),
        variant_id INT REFERENCES product_variants(id),
        product_name VARCHAR(140),
        size_label VARCHAR(20),
        unit_price NUMERIC(12, 2),
        quantity INT
      );
    `;

    console.log('Seeding categories...');
    const categories = [
      { name: 'Tailoring & Outerwear', slug: 'tailoring-outerwear', order: 1 },
      { name: 'Shirting', slug: 'shirting', order: 2 },
      { name: 'Heavyweight Tops', slug: 'heavyweight-tops', order: 3 },
      { name: 'Bottoms', slug: 'bottoms', order: 4 },
      { name: 'Footwear & Carry', slug: 'footwear-carry', order: 5 },
    ];

    for (const cat of categories) {
      await sql`
        INSERT INTO categories (name, slug, display_order) 
        VALUES (${cat.name}, ${cat.slug}, ${cat.order})
      `;
    }

    console.log('Seeding products and variants...');
    
    // Helper to generate a slug
    const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const productsData = [
      // 1. Tailoring & Outerwear
      { cat: 1, name: 'ACID//SYS Technical Blazer', base_price: 250000, cad_type: 'blz' },
      { cat: 1, name: 'Neo-Brutalist Trench Coat', base_price: 350000, cad_type: 'cot' },
      { cat: 1, name: 'Asymmetric Wool Overcoat', base_price: 450000, cad_type: 'cot' },
      { cat: 1, name: 'Cropped Flight Jacket', base_price: 220000, cad_type: 'cot' },
      { cat: 1, name: 'Modular Utility Vest', base_price: 180000, cad_type: 'blz' },
      { cat: 1, name: 'Deconstructed Wrap Blazer', base_price: 280000, cad_type: 'blz' },
      
      // 2. Shirting
      { cat: 2, name: 'Oversized Poplin Shirt', base_price: 85000, cad_type: 'sht' },
      { cat: 2, name: 'Geometric Panel Button-Down', base_price: 95000, cad_type: 'sht' },
      { cat: 2, name: 'Silk Utility Shirt', base_price: 120000, cad_type: 'sht' },
      { cat: 2, name: 'Asymmetric Collar Tunic', base_price: 110000, cad_type: 'sht' },
      { cat: 2, name: 'Boxy Camp Collar Shirt', base_price: 80000, cad_type: 'sht' },
      { cat: 2, name: 'Translucent Layering Shirt', base_price: 105000, cad_type: 'sht' },

      // 3. Heavyweight Tops
      { cat: 3, name: 'Structured Scuba Hoodie', base_price: 140000, cad_type: 'tee' },
      { cat: 3, name: 'Brushed Cotton Mock-Neck', base_price: 65000, cad_type: 'tee' },
      { cat: 3, name: 'Heavyweight Graphic Tee', base_price: 65000, cad_type: 'tee' },
      { cat: 3, name: 'Distressed Knit Sweater', base_price: 150000, cad_type: 'tee' },
      { cat: 3, name: 'Oversized French Terry Crewneck', base_price: 90000, cad_type: 'tee' },
      { cat: 3, name: 'Panelled Zip-Up Hoodie', base_price: 130000, cad_type: 'tee' },

      // 4. Bottoms
      { cat: 4, name: 'Wide-Leg Technical Trousers', base_price: 160000, cad_type: 'trs' },
      { cat: 4, name: 'Pleated Wool Trousers', base_price: 190000, cad_type: 'trs' },
      { cat: 4, name: 'Cargo Parachute Pants', base_price: 145000, cad_type: 'trs' },
      { cat: 4, name: 'Asymmetric Skort', base_price: 95000, cad_type: 'srt' },
      { cat: 4, name: 'Tailored Bermuda Shorts', base_price: 85000, cad_type: 'srt' },
      { cat: 4, name: 'Flared Denim Jeans', base_price: 130000, cad_type: 'trs' },

      // 5. Footwear & Carry
      { cat: 5, name: 'Chunky Combat Boots', base_price: 290000, cad_type: 'ftw' },
      { cat: 5, name: 'Molded Slip-On Mules', base_price: 150000, cad_type: 'ftw' },
      { cat: 5, name: 'Square-Toe Leather Derbies', base_price: 210000, cad_type: 'ftw' },
      { cat: 5, name: 'Technical Harness Backpack', base_price: 180000, cad_type: 'rig' },
      { cat: 5, name: 'Asymmetric Crossbody Bag', base_price: 120000, cad_type: 'rig' },
      { cat: 5, name: 'Modular Belt Bag', base_price: 85000, cad_type: 'rig' },
    ];

    let skuCounter = 1000;

    for (const p of productsData) {
      const slug = toSlug(p.name);
      const skuCode = `ACID-${skuCounter}`;
      skuCounter++;

      let desc = `Architectural ready-to-wear tailored from premium 500GSM technical fabrics. Cut for a relaxed brutalist fit with zero-compromise hardware.`;
      if (p.name.includes('Blazer')) desc = "480GSM high-twist virgin wool with unpadded dropped shoulders, raw horn closures, and dual rear vents.";
      if (p.name.includes('Trench')) desc = "Double-faced waterproof gabardine with an architectural storm flap, raglan sleeve gussets, and concealed placket.";
      if (p.name.includes('Tee') || p.name.includes('Crewneck')) desc = "Zero-sag combed African cotton with reinforced 4cm mock rib collar and boxy torso cut.";
      if (p.name.includes('Cargo')) desc = "240D tear-resistant nylon ripstop engineered with 3D knee articulation darts and deep cargo bellows.";
      if (p.name.includes('Shirt')) desc = "Crisp structural poplin woven with high-density yarns. Features an asymmetric placket and dropped shoulders for a relaxed geometric drape.";
      if (p.name.includes('Hoodie')) desc = "500GSM brushed heavyweight fleece with a double-layered structured hood and aggressive cropped hem. Tactical kangaroo pocket integration.";
      if (p.name.includes('Trousers')) desc = "Wide-leg tailored gabardine trousers with sharp center creases and an extended waistband tab. Fully lined for structure.";
      if (p.name.includes('Shoe') || p.name.includes('Sneaker')) desc = "Bench-made with vulcanized lug outsoles and ballistic nylon uppers. Engineered for extreme urban traversal and heavy impact.";
      if (p.name.includes('Bag') || p.name.includes('Rig')) desc = "1000D Cordura nylon equipped with mil-spec webbing, magnetic Fidlock hardware, and multiple modular cargo compartments.";
      
      let telemetry = 'MOD-0' + p.cat + '/4PX';
      let material = p.cat === 1 || p.cat === 4 ? 'VIRGIN WOOL / GABARDINE' : p.cat === 2 ? '100% COTTON POPLIN' : p.cat === 3 ? '500GSM FLEECE' : 'CORDURA 1000D';

      const res = await sql`
        INSERT INTO products (
          category_id, name, slug, sku_code, base_price, currency, badge, description, telemetry_spec, material, cad_type, in_stock
        ) VALUES (
          ${p.cat}, ${p.name}, ${slug}, ${skuCode}, ${p.base_price}, 'NGN', 'NEW', ${desc}, ${telemetry}, ${material}, ${p.cad_type}, true
        ) RETURNING id;
      `;
      const productId = res[0].id;

      // Variants
      let sizes = [];
      if ([1, 2, 3].includes(p.cat)) {
        sizes = ['S', 'M', 'L', 'XL'];
      } else if (p.cat === 4) {
        sizes = ['30', '32', '34', '36'];
      } else if (p.cat === 5) {
        if (p.cad_type === 'ftw') sizes = ['EU 41', 'EU 42', 'EU 43', 'EU 44'];
        else sizes = ['ONE SIZE'];
      }

      for (let i = 0; i < sizes.length; i++) {
        const size = sizes[i];
        const variantSku = `${skuCode}-${size.replace(/ /g, '')}`;
        await sql`
          INSERT INTO product_variants (
            product_id, size_label, sku, price_modifier, inventory_count
          ) VALUES (
            ${productId}, ${size}, ${variantSku}, 0.00, 20
          );
        `;
      }
    }

    console.log('Seed completed successfully!');
  } catch (err) {
    console.error('Error during seed:', err);
    process.exit(1);
  }
}

seed();

