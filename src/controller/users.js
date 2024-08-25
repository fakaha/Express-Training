const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    // destructuring array, karena ada dua yaitu rows dan field, ini pakai rows dengan penamaan data
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
        message: 'Server error',
        serverMessage: err,
    })
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new users success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log("idUser"), idUser;
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE user success",
    data: {
      id: idUser,
      name: "Si kocak",
      email: "kocak@gmail.com",
      address: "Solo",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
