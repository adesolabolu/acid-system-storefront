import { sql } from '../src/lib/db';

async function fixSchema() {
  console.log('Fixing users table schema...');

  try {
    await sql`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='name') THEN
          ALTER TABLE users ADD COLUMN name VARCHAR(255);
        END IF;
        
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='image') THEN
          ALTER TABLE users ADD COLUMN image TEXT;
        END IF;

        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='cart_data') THEN
          ALTER TABLE users ADD COLUMN cart_data JSONB DEFAULT '[]'::jsonb;
        END IF;
      END
      $$;
    `;

    console.log('Schema fixed successfully!');
  } catch (err) {
    console.error('Error during schema fix:', err);
    process.exit(1);
  }
}

fixSchema();
