const express = require("express");
const mysql = require("mysql2");

const usersRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/logs");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_mysql",
  port: 3307,
});

const app = express();

app.use(middlewareLogRequest);
// mengizinkan semua request json
app.use(express.json());

// semua path users yang sudah dibuat akan masuk di sini
app.use("/users", usersRoutes);

app.use("/", (req, res) => {
  dbPool.execute(`SELECT * FROM users`, (err, rows) => {
    if (err === true) {
      res.json({
        message: "connection failed",
      });
    }
    res.json({
      message: "connection success",
      data: rows,
    });
  });
});

app.listen(4000, () => {
  console.log(`Server berhasil running di port 4000`);
});
