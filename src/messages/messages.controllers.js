const Messages = require ("../models/messages.models");

const findAllMessages = async () => {
    const data = await Messages.findAll();
    return data
}

const findMessagesById = async (id) => {
    const data = await Messages.findOne ({
        where: {
            id: id,
        },
    });

    return data
};


const createMessage = async (messageObj) => {
    const newMessage = {
        content: messageObj.content,
        message: messageObj.status
    }
    const data = await Messages.create(newMessage)
    return data;
}

const updateMessage = async (id, updtMsj) => {
    const data = await Messages.update(updtMsj, {
        where: {
            id: id
         }
    })
    return data[0]
}

const deleteMessage = async (id) => {
    const data = await Messages.destroy ( {
        where: {
            id: id,
        }
    })
    return data
}

module.exports = {
    findAllMessages,
    findMessagesById,
    createMessage,
    updateMessage,
    deleteMessage
};