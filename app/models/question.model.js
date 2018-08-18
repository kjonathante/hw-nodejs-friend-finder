const db = require('../db')

exports.getAll = function(cb) {
  db.get().query('SELECT * FROM questions', function (err, rows) {
    if (err) return cb(err)
    cb(null, rows)
  })
}