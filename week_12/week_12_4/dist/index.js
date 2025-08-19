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
function InserData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)`, [username, email, password]);
        console.log(result);
    });
}
InserData("abhi12345", "abhi112345.singh@gmail.com", "dlkfjsd12345");
