import { sql } from '../src/lib/db';

async function migrate() {
  console.log('Starting users migration...');

  try {
    console.log('Creating users table...');
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        image TEXT,
        cart_data JSONB DEFAULT '[]'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;

    console.log('Adding user_id to orders table...');
    await sql`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns 
          WHERE table_name='orders' AND column_name='user_id'
        ) THEN
          ALTER TABLE orders ADD COLUMN user_id INT REFERENCES users(id);
        END IF;
      END
      $$;
    `;

    console.log('Migration completed successfully!');
  } catch (err) {
    console.error('Error during migration:', err);
    process.exit(1);
  }
}

migrate();
