const messagesServices = require('./messages.services')
const router = require('express').Router()

router.get('/', messagesServices.getAllMessages)
router.post('/', messagesServices.postMessage)

router.get('/:id', messagesServices.getMessageById)
router.put('/:id', messagesServices.putMessage)
router.delete('/:id', messagesServices.deleteMessage)

module.exports = router