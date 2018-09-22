const db = require('../db/db')

exports.getAll = function() {
  return new Promise ( function(resolve, reject){
    db.get().query({
      sql: 'SELECT * FROM questions',
    },
    function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      if (error) {
        return reject(error)
      }

      return resolve(results)
    })
  })
}