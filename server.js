var path = require("path");
var express = require('express');
// var bodyParser = require('body-parser')
var db = require('./app/db/db')
var api = require('./app/routes/api')

var app = express();

/*
Express route-specific
Adding body parsers specifically to the routes that need them. 
In general, this is the most recommended way to use body-parser with Express.
*/
// create application/json parser
// var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: true })

// parse application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use(express.static(path.join(__dirname, 'app/public')));

db.connect()

app.use('/api', api)

var server = app.listen(3000, function() {
  console.log('Server running on ', server.address())
})