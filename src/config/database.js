const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_mysql",
  port: 3307,
});

module.exports = dbPool.promise();