import { serve } from "@hono/node-server";
import { Hono } from "hono";
require("dotenv").config();
import mysql from "mysql2/promise";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import MedForm from "./Screens/MedForm";
import Report from "./Screens/Report";
import Analysis from "./Screens/Analysis";
import TnC from "./Screens/TnC";
import Dashboard from "./Screens/Panel/Dashboard";
import { serveStatic } from "@hono/node-server/serve-static";
import { setCookie, deleteCookie } from "hono/cookie";
import chatbot from "./chatbot";
import { guest, setAuthenticatedUser, userAuth } from "./middlewares";
import { User } from "../types";

const bcrypt = require("bcrypt");

type Variables = {
  user: User;
};

const app = new Hono<{
  Variables: Variables;
}>();

const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

app.use(
  "assets/*",
  serveStatic({
    root: "public",
    onNotFound: (c) => {
      return console.log(c);
    },
  })
);

app.use("*", setAuthenticatedUser);

app.get("/", async (c) => {
  return c.html(
    <Dashboard
      siteData={{
        title: "Welcome",
        user: c.get("user"),
      }}
      name={""}
    />
  );
});

app.use("/register/*", guest);
//Route for Register
app.get("/register", (c) => {
  return c.html(
    <Signup
      siteData={{
        title: "Register",
      }}
      name={""}
    />
  );
});

app.post("/register", async (context) => {
  const data = await context.req.formData();

  // Connect Database Here
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
  });

  // Get Data

  const name = data.get("name")?.toString() || "";

  // Validate the email
  const email = data.get("email")?.toString() || "";

  if (!emailRegex.test(email)) {
    return context.redirect("/register");
  }

  // Check if the email is already in use
  try {
    const [results] = await connection.execute(
      "SELECT * FROM users WHERE email_address = ? LIMIT 1",
      [email]
    );

    const users = JSON.parse(JSON.stringify(results));

    // User already exists
    if (users.length >= 1) {
      return context.redirect("/login");
    }
  } catch (e) {
    return context.redirect("/register");
  }

  // Validate the password
  const password = data.get("password")?.toString() || "";

  if (!passwordRegex.test(password)) {
    return context.redirect("/register");
  }

  // Hash the password
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const [rows] = await connection.execute(
      "INSERT INTO users (name, email_address, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );
  } catch (e) {
    console.log(e);
    return context.redirect("/register");
  }

  return context.redirect("/login");
});

//Route for Login
app.use("/login/*", guest);
app.get("/login", (c) => {
  return c.html(
    <Login
      siteData={{
        title: "Login",
      }}
      name={""}
    />
  );
});

app.post("/login", async (context) => {
  const data = await context.req.formData();

  // Validate the email
  const email = data.get("email")?.toString() || "";

  if (!emailRegex.test(email)) {
    return context.redirect("/login");
  }

  // Connect Database Here
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
  });

  // Get Data
  const [rows] = await connection.execute(
    "SELECT * FROM users WHERE email_address = ? LIMIT 1",
    [email]
  );

  const users = JSON.parse(JSON.stringify(rows));

  if (users.length === 0) {
    return context.redirect("/login");
  }

  const user = users[0];

  // Validate the password // be@gmail.com || Passw0rd##
  const validPassword = await bcrypt.compare(
    data.get("password")?.toString() || "",
    user.password
  );

  if (!validPassword) {
    return context.redirect("/login");
  }

  // Set the session
  setCookie(context, "user", user.id, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  return context.redirect("/");
});

app.get("/logout", (c) => {
  deleteCookie(c, "user");
  return c.redirect("/login");
});

app.use("/form/*", userAuth);
//Route for MedForm
app.get("/form", async (c) => {
  return c.html(
    <MedForm siteData={{ title: "Data Page", user: c.get("user") }} name={""} />
  );
});

// route for dataform
app.post("/form", async (c) => {
  const data = await c.req.formData();

  // Connect Database Here
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
  });

  // Get User Data
  const user = c.get("user");

  // Numeric validations
  const age = Number(data.get("age"));
  const trestbps = Number(data.get("trestbps"));
  const chol = Number(data.get("chol"));
  const thalch = Number(data.get("thalch"));
  const oldpeak = Number(data.get("oldpeak"));

  // Categorical validations (assuming inputs are strings that need to be validated)
  const restecg = data.get("restecg");
  const slope = data.get("slope");
  const ca = Number(data.get("ca"));
  const cp = Number(data.get("cp")); // Assuming ca is submitted as a number
  const thal = data.get("thal");

  // Define an array to hold any validation errors
  let errors = [];

  // Check each field and add errors to the array as needed
  if (age < 20 || age > 90)
    errors.push("age value out of allowed range (20-90).");
  if (trestbps < 80 || trestbps > 200)
    errors.push("trestbps value out of allowed range (80-200).");
  if (chol < 100 || chol > 400)
    errors.push("chol value out of allowed range (100-400).");
  if (thalch < 60 || thalch > 220)
    errors.push("thalch value out of allowed range (60-220).");

  // If there are any errors, return them and do not proceed with the database insertion
  if (errors.length > 0) {
    return c.json({ errors }, 400);
  }

  // Prepare the SQL statement
  const query = `INSERT INTO dataform (age, sex, trestbps, chol, fbs, thalch, exang, oldpeak, slope, ca, thal, restecg, cp, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    data.get("age"),
    data.get("sex"),
    data.get("trestbps"),
    data.get("chol"),
    data.get("fbs"),
    data.get("thalch"),
    data.get("exang"),
    data.get("oldpeak"),
    data.get("slope"),
    data.get("ca"),
    data.get("cp"),
    data.get("thal"),
    data.get("restecg"),
    user.id,
  ];

  // Execute the query
  const result = await connection.execute(query, values);

  // Close the connection
  await connection.end();

  // Send to prediction endpoint

  const response = await fetch(
    "https://fast-cove-17775-a667175f0bfb.herokuapp.com/predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: Number(data.get("age")),
        sex: data.get("sex"),
        trestbps: Number(data.get("trestbps")),

        chol: Number(data.get("chol")),
        fbs: data.get("fbs"),
        thalch: Number(data.get("thalch")),

        exang: data.get("exang"),
        oldpeak: Number(data.get("oldpeak")),
        slope: data.get("slope"),

        ca: Number(data.get("ca")),
        cp: Number(data.get("cp")),
        thal: data.get("thal"),
        restecg: data.get("restecg"),
      }),
    }
  );

  if (!response.ok) {
    // Display error page
    return c.json({ error: "An error occurred" }, 500);
  }

  const reportData = await response.json();

  console.log(reportData);

  return c.html(
    <Report siteData={{ title: "Results" }} name={""} data={reportData} />
  );
});

//Route for Analysis
app.get("/report", async (c) => {
  return c.html(
    <Analysis siteData={{ title: "Results", user: c.get("user") }} name={""} />
  );
});

//Route for t&c
app.get("/tnc", async (c) => {
  return c.html(
    <TnC siteData={{ title: "T&C", user: c.get("user") }} name={""} />
  );
});

// Assistant Endpoint
app.route("assistant", chatbot);

export default app;

serve(app);
