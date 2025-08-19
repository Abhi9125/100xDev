// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

// Insert data unsecure way in this way intruder insert the sql commant and distroy the database it called sql injection to resolve this problem
// we use the 2nd way to insert the data

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
async function InserData(username: string, email: string, password: string) {
  await client.connect();
  const result = await client.query(
    `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)`,
    [username, email, password]
  );
  console.log(result);
}

InserData("abhi12345", "abhi112345.singh@gmail.com", "dlkfjsd12345");
