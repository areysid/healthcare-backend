import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  connectionString: "postgresql://postgres:%28HealthCare2025%29@db.gzqkpvrejvuiiqejbkze.supabase.co:5432/postgres"
});

client.connect()
  .then(() => {
    console.log("✅ Connected successfully");
    client.end();
  })
  .catch(err => console.error("❌ Connection error", err));
