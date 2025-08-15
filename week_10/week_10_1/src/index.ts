import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://Test_owner:npg_5vb4rXGZenLC@ep-steep-bonus-a49p8ten-pooler.us-east-1.aws.neon.tech/Test?sslmode=require&channel_binding=require",
});

async function createUsersTable() {
  await client.connect();

  const result = await client.query(`
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);

  console.log(result);
}

createUsersTable();
