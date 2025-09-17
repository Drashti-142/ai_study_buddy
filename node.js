// test-db.js
import postgres from 'postgres';
import 'dotenv/config'; // Loads .env file automatically

// Create connection using your .env POSTGRES_URL
const sql = postgres(process.env.POSTGRES_URL, {
  ssl: { rejectUnauthorized: false }, // required for Neon cloud DB
});

(async () => {
  try {
    // Simple test query
    const result = await sql`SELECT NOW() AS current_time`;
    console.log('✅ Connected to database!');
    console.log('Current DB time:', result[0].current_time);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  } finally {
    await sql.end(); // Close connection
  }
})();
