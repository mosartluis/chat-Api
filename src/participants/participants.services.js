const handledResponse = require ("../utils/handleResponses")
const participantsController = require ("../participants/participants.controllers");

const getAllParticipants = (req, res) => {
   participantsController.findAllParticipants()
   .then((data) => {
        handledResponse.success({
        res,
        status: 200,
        messge: 'The request was succefully',
        data:data
    })
    
   }).catch((err) => {
        handledResponse.error({
        res,
        status: 404,
        messge: 'The request was not found',  
        fields: err  
   })
});

};

const getParticipantById = (req, res) => {
    participantsController.findParticipantsById(req.params.id)
    .then((data) => {
        handledResponse.success({
        res,
        status: 200,
        message: 'The recuest was succefully',
        data: data
    })
    }).catch((err) => {
        handledResponse.error({
            res,
            status: 404,
            message: 'Then reques filed',
            fileds: err
        })
        
    });
};


const postParticipant = (req, res) => {
    participantsController.createParticipant(req.body)
    .then((data) => {
             handledResponse.success({
                res,
                status: 201,
                message: 'Participant created succesfully',
                data: data
             })
    }).catch((err) => {
        handledResponse.error({
            status: 400,
            message: 'the participant was not created succesfully',
            fields: err
        });
    });

};

const putParticipant = (req, res) => {
    participantsController.updateParticipant(req.params.id, req.body)
    .then((data) => {
        handledResponse.success({
            res,
            status: 201,
            message: 'Updated pasticipant',
            data: data
        })
    }).catch((err) => {
        handledResponse.error({
            res,
            status: 400,
            message: 'error',
            fields: err
        })
    });
};

const deleteParticipant = (req, res) => {
    participantsController
      .deleteParticipant(req.params.id)
      .then(() => {
        handledResponse.success({
          res,
          status: 204,
          message: "Participant deleted",
        });
      })
      .catch((err) => {
        handledResponse.error({
          res,
          status: 404,
          meesage: "Error deleting participant",
          fields: err,
        });
      });
  };

  module.exports = {
    getAllParticipants,
    getParticipantById,
    postParticipant,
    putParticipant,
    deleteParticipant
  }