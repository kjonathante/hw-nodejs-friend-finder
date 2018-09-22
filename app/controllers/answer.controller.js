const Answer = require('../models/answer.model')

exports.create = async function(req, res, next) {
  //console.log(req.body)
  let insertId
  try {
    insertId = await Answer.create( req.body )
  } catch (error) {
    return res.json({success: false}) 
  }

  return res.json({success: true, insertId: insertId})
} 

exports.get = async function(req, res, next) {
  console.log(req.params)
  var result
  try {
    result = await Answer.findById( req.params.id )
  } catch (error) {
    console.log(error)
    return res.json({success: false}) 
  }
  
  return res.json({success: true, data: result})
} 
