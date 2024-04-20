require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = 3306;

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

// Routes
// Add your sign-up, sign-in, and forgot password routes here

app.get("/", (req, res) => {
  if (req.session.userId) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/signin.html"); // or res.sendFile for a custom route as shown above
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err) => {
        if (err) {
          return res.status(500).send("Error registering new user");
        }
        res.redirect("/signin");
      }
    );
  } catch {
    res.status(500).send("Server error");
  }
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).send("Server error");
      }
      if (results.length > 0) {
        const comparison = await bcrypt.compare(password, results[0].password);
        if (comparison) {
          req.session.userId = results[0].id; // Create session
          return res.redirect("/dashboard"); // Redirect to a secure page
        }
      }
      res.status(401).send("Email or password is incorrect");
    }
  );
});

app.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  // In a real application, generate a secure, unique token
  const resetToken = require("crypto").randomBytes(20).toString("hex");
  const expireTime = new Date(Date.now() + 3600000); // Token expires in 1 hour

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      return res.status(500).send("Error finding user");
    }
    if (results.length > 0) {
      db.query(
        "UPDATE users SET reset_password_token = ?, reset_password_expires = ? WHERE email = ?",
        [resetToken, expireTime, email],
        (err) => {
          if (err) {
            return res.status(500).send("Error updating user with reset token");
          }
          // Here you would send the reset token to the user's email
          // For this example, we'll just send a message indicating success
          res.send("If the email is registered, a reset link will be sent.");
        }
      );
    } else {
      // Even if the email isn't found, don't reveal that to the user
      res.send("If the email is registered, a reset link will be sent.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
