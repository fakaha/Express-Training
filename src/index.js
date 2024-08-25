require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const usersRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/logs");

const app = express();

app.use(middlewareLogRequest);
// mengizinkan semua request json
app.use(express.json());

// semua path users yang sudah dibuat akan masuk di sini
app.use("/users", usersRoutes);


app.listen(PORT, () => {
  console.log(`Server berhasil running di PORT ${PORT}`);
});
