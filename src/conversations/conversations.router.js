const conversationsServices = require('./conversations.services')
const router = require('express').Router()
router.get('/', conversationsServices.getAllConversations )
router.post('/', conversationsServices.postConversation )
// Las rutas que tengan variables seran las ultimas
router.get('/:id', conversationsServices.getConversationById )
router.put('/:id', conversationsServices.putConversation )
router.delete('/:id', conversationsServices.deleteConversation )
module.exports = router












