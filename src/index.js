const express = require('express')

const usersRoutes = require('./routes/users')

const middlewareLogRequest = require('./middleware/logs')
const app = express()

app.use(middlewareLogRequest)

app.use((req, res, next) => {
    console.log(`middleware kedua`);
    next()
})

// semua path users yang sudah dibuat akan masuk di sini
app.use('/users', usersRoutes)


app.listen(4000, () => {
    console.log(`Server berhasil running di port 4000`);
})