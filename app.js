var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","jade");

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Routes
app.use('/', require('./routes/index.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('No encontrado');
    err.status = 404;
    next(err);
});

module.exports = app;
console.log("Servidor corriendo");

/*
// para conexion mongodb local
mongoose.connect('mongodb://daw:123@ds041821.mlab.com:41821/practica');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('mongoose connection successful');
});
*/
