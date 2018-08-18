var mysql = require('mysql')
var config = require('../config')
var state = {
  pool: null,
}

exports.connect = function() {
  state.pool = mysql.createPool({
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    host: config.db_host,
    port: config.db_port,
  })
}

exports.get = function() {
  return state.pool
}
