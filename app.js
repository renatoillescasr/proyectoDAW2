var express = require("express");
var path = require('path');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://ds041821.mlab.com:41821/practica');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('mongoose connection successful');
});

// view engine setup
app.set("view engine","jade");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', require('./routes/index.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('No encontrado');
    err.status = 404;
    next(err);
});

/*
app.get("/",function(req,res){
  res.render("inicio");
});

app.get("/index",function(req,res){
  res.render("inicio");
});

app.get("/catalogo",function(req,res){
  res.render("catalogo");
});

app.get("/contacto",function(req,res){
  res.render("contacto");
});

app.get("/micarrito",function(req,res){
  res.render("micarrito");
});

app.get("/iniciosesion",function(req,res){
  res.render("iniciosesion");
});

app.get("/registro",function(req,res){
  res.render("registro");
});

app.get("/compras",function(req,res){
  res.render("paracompras");
  console.log(req.query.marca);
  console.log(req.query.producto_id);
});

app.get("/tiendas",function(req,res){
  res.render("tiendas");
  console.log(req.query.marca);
  console.log(req.query.producto_id);
});

app.listen(8081);
*/
module.exports = app;
console.log("Servidor corriendo");
