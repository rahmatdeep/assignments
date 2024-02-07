import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    await client.connect();
    const insertQuery = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`;
    const values = [userId, title, description];
    const res = await client.query(insertQuery, values);
    return {
      title: res.rows[0].title,
      description: res.rows[0].description,
      done: res.rows[0].done,
      id: res.rows[0].id,
    };
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    await client.connect();
    const updateQuery = `UPDATE todos
        SET done = true
        WHERE id = $1 
        RETURNING *`;
    const values = [todoId];
    const res = await client.query(updateQuery, values);
    return {
      title: res.rows[0].title,
      description: res.rows[0].description,
      done: res.rows[0].done,
      id: res.rows[0].id,
    };
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    await client.connect();
    const getQuery = `SELECT * FROM todos
        WHERE user_id = $1`;
    const values = [userId];
    const res = await client.query(getQuery, values);
    return(res.rows);
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
}

