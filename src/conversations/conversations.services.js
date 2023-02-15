const handledResponse = require ("../utils/handleResponses")
const conversationsController = require ("../conversations/conversations.controllers");

const getAllConversations = (req, res) => {
   conversationsController.findAllConversation()
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

const getConversationById = (req, res) => {
    conversationsController.findConversationById(req.params.id)
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


const postConversation = (req, res) => {
    conversationsController.createConversation(req.body)
    .then((data) => {
             handledResponse.success({
                res,
                status: 201,
                message: 'conversation created succesfully',
                data: data
             })
    }).catch((err) => {
        handledResponse.error({
            status: 400,
            message: 'the conversation was not created succesfully',
            fields: err
        });
    });

};

const putConversation = (req, res) => {
    conversationsController.updateConversation(req.params.id, req.body)
    .then((data) => {
        handledResponse.success({
            res,
            status: 201,
            message: 'Updated conversation',
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

const deleteConversation = (req, res) => {
    conversationsController
      .deleteConversation(req.params.id)
      .then(() => {
        handledResponse.success({
          res,
          status: 204,
          message: "Conversation deleted",
        });
      })
      .catch((err) => {
        handledResponse.error({
          res,
          status: 404,
          meesage: "Error deleting convesration",
          fields: err,
        });
      });
  };

  module.exports = {
    getAllConversations,
    getConversationById,
    postConversation,
    putConversation,
    deleteConversation
  }