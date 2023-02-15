const handleResponses = require("../utils/handleResponses");
const usersController = require("../users/users.controllers");
const getAllUsers = (req, res) => {
  usersController
    .findAllUsers()
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "the request was successful",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the request not found",
        fields: err,
      });
    });
};
const getUserById = (req, res) => {
  usersController
    .getUserById(req.params.id)
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "the request was successful",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the request failed",
        fields: err,
      });
    });
};
const postUser = (req, res) => {
  usersController
    .createUsers(req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "User created successfully",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: "the User was not created successfully",
        fields: {
          firstName: "string",
          lastName: "string",
          email: "string",
          password: "string",
          profileImage: "string",
          phone: "string"
        },
      });
    });
};
const putUser = (req, res) => {
  usersController
    .updateUser(req.params.id, req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "Updated User",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "Error updating User",
        fields: {
          firstName: "string",
          lastName: "string",
          email: "string",
          password: "string",
          profileImage: "string",
          phone: "string"
        },
      });
    });
};
const deleteUser = (req, res) => {
  usersController
    .deleteUsers(req.params.id)
    .then(() => {
      handleResponses.success({
        res,
        status: 204,
        message: "User deleted",
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        meesage: "Error deleting User",
        fields: err,
      });
    });
};
module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};