const Users = require('../models/users.models');
const uuid = require('uuid');
const { hashPassword } = require('../utils/crypto');

// GET
const findAllUser = async () => {
  const data = await Users.findAll();
  return data;
};
const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

// POST

const findUserByEmail = async(email) => {
  const data = await Users.findOne({
    where: {
      email: email
    }
  })
  return data
}

const createUser = async (userObj) => {
  const newUser = {
    id: uuid.v4(),
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: hashPassword(userObj.password),
    profileImage: userObj.profileImage,
    phone: userObj.phone
  };
  const data = await Users.create(newUser);
  return data;
};
// PUT
const updateUser = async (id, userObj) => {
  const data = await Users.update(userObj, {
    where: {
      id: id,
    },
  });
  return data[0];
  // [1] // cantidad
  // [0] // error, id no existe
};
// DELETE
const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });
  return data;
  // 1 exito
  // 0 error
};
module.exports = {
    findAllUser,
    findUserById,
    findUserByEmail,
    createUser,
    updateUser,
    deleteUser,
};







