// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

/* async function createAndInsertTable() {
  await client.connect();
  await client.query(`
    DROP TABLE IF EXISTS addresses2;
    `);

  console.log("Tabe drop");
  await client.query(`
    CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
   )
  `);

  console.log("Addresses2 created");

  await client.query(`
    INSERT INTO addresses(user_id , city , country, street, pincode)
    VALUES (3, 'Robertsganj', 'India', 'CivilLine', '231216')
  `);

  console.log("Table Inserted");
}

createAndInsertTable(); */

// ---- Get address details using user id

/* async function getAddressesByUserId(userId: number) {
  await client.connect();

  const result = await client.query(
    `SELECT * FROM addresses WHERE user_id = $1`,
    [userId]
  );

  console.log("get addresses detail");

  console.log(result.rows);
}

getAddressesByUserId(3);
 */

/* async function InsertValue(userId: number) {
  await client.connect();

  await client.query(`
    INSERT INTO addresses(user_id , city , country, street, pincode)
    VALUES (3, 'Robertsganj11', 'India11', 'CivilLine11', '231216')
  `);

  console.log("Table Inserted");
}

InsertValue(3); */

// Joins

async function GettingAddressByJoin(userId: number) {
  try {
    await client.connect();
    const query = `
    SELECT u.id, u.username,  u.email, a.city, a.country, a.street, a.pincode
    FROM users u
  JOIN addresses a on u.id = a.user_id
    WHERE u.id= $1
    `;

    const result = await client.query(query, [userId]);

    if (result.rows.length > 0) {
      console.log("User address found : ", result.rows);
      return result.rows;
    } else {
      console.log("No user or address found with the given ID.");
      return null;
    }
  } catch (err) {
    console.error("Error during fetching", err);
  }
}
GettingAddressByJoin(1);
