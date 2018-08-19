const Question = require('../models/question.model')

exports.getAll = async function(req, res, next) {
  var data
  try {
    data = await Question.getAll()
  } catch (error) {
    return res.json({success: false}) 
  }
  res.json(data)
} 
