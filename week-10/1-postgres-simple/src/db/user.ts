import { client } from "../index";
import { createTables } from "./setup";

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
  try {
    await client.connect();
    const insertQuery = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`;
    const values = [username, password, name];
    const res = await client.query(insertQuery, values);
    return {
      username: res.rows[0].username,
      password: res.rows[0].password,
      name: res.rows[0].name,
    };
  } catch (e) {
    console.log(`Error in transaction ${e}`);
  } finally {
    await client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    await client.connect();
    const searchQuery = `SELECT * FROM users WHERE id = $1`;
    const value = [userId];
    const res = await client.query(searchQuery, value);
    if (res.rows.length > 0) {
      return {
        username: res.rows[0].username,
        password: res.rows[0].password,
        name: res.rows[0].name,
      };
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  } finally {
    await client.end();
  }
}
