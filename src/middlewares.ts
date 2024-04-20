import { Context } from "hono";
import { getCookie } from "hono/cookie";
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
import mysql from "mysql2/promise";

const setAuthenticatedUser = async (c: Context, next: () => any) => {
  const cookieUserId = await getCookie(c, "user");

  if (cookieUserId) {
    // Connect Database Here
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      database: DB_NAME,
      password: DB_PASS,
    });

    let user;

    // Get the user data from the database using the cookie
    try {
      const [results] = await connection.execute(
        "SELECT * FROM users WHERE id = ? LIMIT 1",
        [cookieUserId]
      );

      const users = JSON.parse(JSON.stringify(results));

      if (users.length === 0) {
        await next();
        return;
      }

      user = users[0];

      c.set("user", user);
    } catch (e) {}
  }
  await next();
};

const userAuth = async (c: Context, next: () => any) => {
  const cookieUserId = await getCookie(c, "user");

  if (!cookieUserId) {
    return c.redirect("/login");
  }

  // Connect Database Here
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
  });

  let user;

  // Get the user data from the database using the cookie
  try {
    const [results] = await connection.execute(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [cookieUserId]
    );

    const users = JSON.parse(JSON.stringify(results));

    if (users.length === 0) {
      return c.redirect("/login");
    }

    user = users[0];
  } catch (e) {}

  await next();
};

const guest = async (c: Context, next: () => any) => {
  const cookieUserId = await getCookie(c, "user");

  if (cookieUserId) {
    return c.redirect("/");
  }

  await next();
};

export { userAuth, guest, setAuthenticatedUser };
