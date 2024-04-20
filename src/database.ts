import mysql from "mysql2/promise";
require("dotenv").config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const database = async () => {
  return await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
  });
};

export default database;
