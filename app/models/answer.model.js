const db = require('../db/db')

exports.create = function(data) {
  return new Promise ( function(resolve, reject) {
    var query = db.get().query({
      sql: 'INSERT INTO answers SET ?',
      values: data,
     },
     function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      if (error) {
        reject(error)
      }

      resolve()
    })
  })
}