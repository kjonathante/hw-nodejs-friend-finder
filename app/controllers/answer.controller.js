const Answer = require('../models/answer.model')

exports.create = async function(req, res, next) {
  try {
    await Answer.create( req.body )
  } catch (error) {
    return res.json({success: false}) 
  }
  res.json({success: true})
} 
