const db = require('../db/db')

exports.create = function(data) {
  return new Promise ( function(resolve, reject) {
    db.get().query({
      sql: 'INSERT INTO answers SET ?',
      values: data,
     },
     function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      if (error) {
        return reject(error)
      }

      return resolve(results.insertId)
    })
  })
}

exports.findById = function(id) {
  return new Promise ( function(resolve, reject) {
    var query = db.get().query({
      sql: 'SELECT id, username, photo FROM answers WHERE id=?',
      values: [id],
     },
     function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      if (error) {
        return reject(error)
      }
      var data = results[0].photo
      var buff = Buffer(data)
      var base64data = buff.toString()
      console.log( base64data )

      return resolve({id: results[0].id, photo: base64data })
    })
  })
}