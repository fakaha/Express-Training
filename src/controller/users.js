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
      message: "Server error",
      serverMessage: err,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  if(!body.email || !body.name || !body.address){
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    })
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new users success",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      serverMessage: err,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE user success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      serverMessage: err,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error",
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
