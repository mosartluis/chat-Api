const participantsServices = require('./participants.services')
const router = require('express').Router()

router.get('/', participantsServices.getAllParticipants)
router.post('/', participantsServices.postParticipant)

router.get('/:id', participantsServices.getParticipantById)
router.put('/:id', participantsServices.putParticipant)
router.delete('/:id', participantsServices.deleteParticipant)

module.exports = router