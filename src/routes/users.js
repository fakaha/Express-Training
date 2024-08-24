const express = require('express')

const userController = require('../controller/users.js')

const router = express.Router()

// karena sudah pakai use dengan path /users, kita tinggal memanggilnya dan tak perlu tambah path /users di sini
// router.get('/', (req, res) => {
//     res.json({
//         message: "GET user success"
//     })
// })
// ambil controller users dan dipanggil di sini untuk fungsinya
router.get('/', userController.getAllUsers)
router.post('/', userController.createNewUser)

module.exports = router