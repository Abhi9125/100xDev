"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
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
function GettingAddressByJoin(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `
    SELECT u.id, u.username,  u.email, a.city, a.country, a.street, a.pincode
    FROM users u
    FULL JOIN addresses a on u.id = a.user_id
    WHERE u.id= $1
    `;
            const result = yield client.query(query, [userId]);
            if (result.rows.length > 0) {
                console.log("User address found : ", result.rows);
                return result.rows;
            }
            else {
                console.log("No user or address found with the given ID.");
                return null;
            }
        }
        catch (err) {
            console.error("Error during fetching", err);
        }
    });
}
GettingAddressByJoin(1);
