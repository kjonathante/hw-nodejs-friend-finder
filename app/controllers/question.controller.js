const Question = require('../models/question.model')

const getAll = function(req, res) {
  Question.getAll( function(err,data){
    if (err) throw err

    console.log(data)
    return res.json(data)
  })
  // return res.j son( {data: 'OK'})
} 
module.exports.getAll = getAll