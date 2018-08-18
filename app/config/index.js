require('dotenv').config();//instatiate environment variables

const CONFIG = {} //Make this global to use all over the application


CONFIG.db_host      = process.env.DB_HOST
CONFIG.db_port      = process.env.DB_PORT
CONFIG.db_name      = process.env.DB_NAME
CONFIG.db_user      = process.env.DB_USER
CONFIG.db_password  = process.env.DB_PASSWORD

exports = module.exports = CONFIG;
