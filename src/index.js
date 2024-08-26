require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const usersRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

app.use(middlewareLogRequest);
// mengizinkan semua request json
app.use(express.json());
app.use('/assets', express.static('public/images'))

// semua path users yang sudah dibuat akan masuk di sini
app.use("/users", usersRoutes);
// setelah path ditambahkan middleware upload(multer yang dibuat di middleware).
// lalu single untuk upload single file, dan parameternya phtoto
app.post('/upload',upload.single('photo'), (req, res) => {
  res.json({
    message: 'Upload berhasil',
  })
})

app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})


app.listen(PORT, () => {
  console.log(`Server berhasil running di PORT ${PORT}`);
});
