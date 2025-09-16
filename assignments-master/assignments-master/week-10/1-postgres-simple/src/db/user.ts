import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  await client.connect();

  const result = await client.query(
    `
        INSERT INTO users (username, password, name)
        VALUE ($1, $2, $3)
        `,
    [username, password, name]
  );

  console.log(result);
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {}
