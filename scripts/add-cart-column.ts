import { sql } from '../src/lib/db';

async function migrate() {
  console.log('Adding cart_data to users table...');

  try {
    await sql`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns 
          WHERE table_name='users' AND column_name='cart_data'
        ) THEN
          ALTER TABLE users ADD COLUMN cart_data JSONB DEFAULT '[]'::jsonb;
        END IF;
      END
      $$;
    `;

    console.log('Added cart_data successfully!');
  } catch (err) {
    console.error('Error during migration:', err);
    process.exit(1);
  }
}

migrate();
