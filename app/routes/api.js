const express = require('express')
const router = express.Router()

const QuestionController = require('../controllers/question.controller')
const AnswerController = require('../controllers/answer.controller')

router.get( '/questions', QuestionController.getAll ) //R

router.post( '/answers', AnswerController.create ) //C

module.exports = router;