const Participants = require ("../models/participants.models");

const findAllParticipants = async () => {
    const data = await Participants.findAll();
    return data
}

const findParticipantsById = async (id) => {
    const data = await Participants.findOne ({
        where: {
            id: id,
        },
    });

    return data
};


const createParticipant = async (participantObj) => {
    const newParticipant = {
        content: participantObj.content,
        message: participantObj.status
    }
    const data = await Participants.create(newParticipant)
    return data;
}

const updateParticipant = async (id, updtPart) => {
    const data = await Participants.update(updtPart, {
        where: {
            id: id
         }
    })
    return data[0]
}

const deleteParticipant = async (id) => {
    const data = await Participants.destroy ( {
        where: {
            id: id,
        }
    })
    return data
}

module.exports = {
    findAllParticipants,
    findParticipantsById,
    createParticipant,
    updateParticipant,
    deleteParticipant
};