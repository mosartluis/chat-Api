const Conversations = require("../models/conversations.models");
// GET
const findAllConversation = async () => {
  const data = await Conversations.findAll();
  return data;
};
const findConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id: id,
    },
  });
  return data;
};
// POST
const createConversation = async (conversationObj) => {
  const newConversation = {
    profileImage: conversationObj.profileImage,
    name: conversationObj.name,
    createdBy: conversationObj.createdBy,
    isGroup: conversationObj.isGroup
  };
  const data = await Conversations.create(newConversation);
  return data;
};
// PUT
const updateConversation = async (id, updtCvst) => {
  const data = await Conversations.update(updtCvst, {
    where: {
      id: id,
    },
  });
  return data[0];
  // [1] // cantidad
  // [0] // error, id no existe
};
// DELETE
const deleteConversation = async (id) => {
  const data = await Conversations.destroy({
    where: {
      id: id,
    },
  });
  return data;
  // 1 exito
  // 0 error
};
module.exports = {
  findAllConversation,
  findConversationById,
  createConversation,
  updateConversation,
  deleteConversation,
};







