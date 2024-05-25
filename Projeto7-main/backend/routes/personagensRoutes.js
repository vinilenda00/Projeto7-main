const express = require('express')
const router = express.Router()
const personagensController = require('../controllers/personagensController')
const upload = require('../config/multerConfig')

// router.post('/', upload.single('foto'), personagensController.createPersonagem)
// router.put('/:id', upload.single('foto'), personagensController.updatePersonagem)
router.get('/', personagensController.getAllPersonagem)
router.get('/:id', personagensController.getPersonagemById)
router.delete('/:id', personagensController.deletePersonagem)

module.exports = router