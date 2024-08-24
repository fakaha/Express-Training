const express = require('express')

const userController = require('../controller/users.js')

const router = express.Router()

// karena sudah pakai use dengan path /users, kita tinggal memanggilnya dan tak perlu tambah path /users di sini)
// ambil controller users dan dipanggil di sini untuk fungsinya

// CREATE - POST
router.post('/', userController.createNewUser)
// READ - GET
router.get('/', userController.getAllUsers)
// UPDATE - PATCH
router.patch('/:idUser', userController.updateUser)
// DELETE - DELETE
router.delete('/:idUser', userController.deleteUser)


module.exports = router