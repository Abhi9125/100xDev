// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:mysecretpassword@localhost:5433/postgres",
});

// 1. Create the user Table---------------------------------------------

/* async function createTable() {
  await client.connect();

  const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log(result);
}

createTable(); */

// -------------------------------------------------------------------------------------------
// 2.Insert data unsecure way in this way intruder insert the sql commant and distroy the database it called sql injection
// to resolve this problem we use the 2nd way to insert the data
// -------------------------------------------------------------------------------------------
// 1 way
/* async function InserData(username: string, email: string, password: string) {
  await client.connect();
  const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('${username}', '${email}', '${password}')
    `);
  console.log(result);
} */

// 2 way
/* async function InserData(username: string, email: string, password: string) {
  await client.connect();
  const result = await client.query(
    `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)`,
    [username, email, password]
  );
  console.log(result);
}

InserData("abhi3", "abhi3.singh@gmail.com", "dlk3"); */

// ----------------------------------------------------------------------------------
// 3. Update the users table password
// ----------------------------------------------------------------------------------
/* async function UpdateTable(password: string) {
  await client.connect();
  const result = await client.query(
    `UPDATE users
    SET password = $1
    WHERE email = 'abhi112345.singh@gmail.com'
    `,
    [password]
  );
  console.log(result);
}

UpdateTable("AbhiSingh"); */

// -----------------------------------------------------------------------------------
// 4. Delete the user table
// -----------------------------------------------------------------------------------
/* async function DeleteUserColumn() {
  await client.connect();
  const result = await client.query(
    `DELETE FROM users
   WHERE id = 1
   `
  );
  console.log(result);
}

DeleteUserColumn(); */

// ------------------------------------------------------------------------------------
// 5. Read user Table
// -----------------------------------------------------------------------------------
/* async function ReadUser() {
  await client.connect();
  const result = await client.query(
    `SELECT * FROM users
   WHERE id = 2
   `
  );
  console.log(result);
}

ReadUser(); */

// ------------------------------------------------------------------------------------
// 6. Create addresses table make it relationship with users table
// ------------------------------------------------------------------------------------

/* async function CreateAddressesTable() {
  await client.connect();
  await client.query(`
    DROP TABLE IF EXISTS addresses;
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

CreateAddressesTable();
 */

// ---------------------------------------------------------------
// Get address details using user id
// ---------------------------------------------------------------
/* async function getAddressesByUserId(userId: number) {
  await client.connect();

  const result = await client.query(
    `SELECT * FROM addresses WHERE user_id = $1`,
    [userId]
  );

  console.log("get addresses detail");

  console.log(result.rows);
}

getAddressesByUserId(3); */

// -------------------------------------------------------------------------
// Join
// ------------------------------------------------------------------------
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
GettingAddressByJoin(3);
