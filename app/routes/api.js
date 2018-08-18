const express = require('express')
const router = express.Router()

const QuestionController = require('../controllers/question.controller')

router.get( '/questions', QuestionController.getAll)

module.exports = router;