const getAllUsers = (req, res) => {
    res.json({
        message: "GET all users success"
    })
}

const createNewUser = (req, res) => {
    res.json({
        message: "CREATE new users success"
    })
}

module.exports = {
    getAllUsers,
    createNewUser
}