const usersServices = require('./users.services')
const router = require('express').Router()

router.get('/', usersServices.getAllUsers)
router.post('/', usersServices.postUser)

router.get('/:id', usersServices.getUserById)
router.put('/:id', usersServices.putUser)
router.delete('/:id', usersServices.deleteUser)

module.exports = router
