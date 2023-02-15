const handledResponse = require ("../utils/handleResponses")
const messagesController = require ("../messages/messages.controllers");

const getAllMessages = (req, res) => {
   messagesController.findAllMessages()
   .then((data) => {
        handledResponse.success({
        res,
        status: 200,
        messge: 'The recuest was succefully',
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

const getMessageById = (req, res) => {
    messagesController.getMessageById(req.params.id)
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


const postMessage = (req, res) => {
    messagesController.createMessage(req.body)
    .then((data) => {
             handledResponse.success({
                res,
                status: 201,
                message: 'message created succesfully',
                data: data
             })
    }).catch((err) => {
        handledResponse.error({
            status: 400,
            message: 'the message was not created succesfully',
            fields: err
        });
    });

};

const putMessage = (req, res) => {
    messagesController.updateMessage(req.params.id, req.body)
    .then((data) => {
        handledResponse.success({
            res,
            status: 201,
            message: 'Updated message',
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

const deleteMessage = (req, res) => {
    messagesController
      .deleteMessage(req.params.id)
      .then(() => {
        handledResponse.success({
          res,
          status: 204,
          message: "Message deleted",
        });
      })
      .catch((err) => {
        handledResponse.error({
          res,
          status: 404,
          meesage: "Error deleting message",
          fields: err,
        });
      });
  };

  module.exports = {
    getAllMessages,
    getMessageById,
    postMessage,
    putMessage,
    deleteMessage
  }