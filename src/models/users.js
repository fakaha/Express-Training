const dbPool = require("../config/database.js")

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery)
};

module.exports = {
  getAllUsers
}