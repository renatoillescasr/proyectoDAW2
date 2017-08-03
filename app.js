var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

/*para conexion mongodb -remota
mongoose.connect('mongodb://ds041821.mlab.com:41821/practica');
*/
//para conexion mongodb local
mongoose.connect('mongodb://localhost/nodekb');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('mongoose connection successful');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","jade");
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Routes
app.use('/', require('./routes/index.js'));

// llamada a tabla Usuario en MONGODB
let Usuarios = require('./models/usuario.js');

// lEER DATOS DE MONGODB
app.get('/prueba',function(req,res){
  Usuarios.find({},function(err,usuarios){
    if(err){
      console.log("error al leer la tabla");
    }
    else{
      res.render('parapruebas',{
        usuarios: usuarios
      });
      console.log(usuarios.nombres);
    }
  });
});

//AGREGAR DATOS A MONGODB
app.post('/registro',function(req,res){
  let usuario = new Usuarios;
  usuario.cedula = req.body.cedula;
  usuario.nombres = req.body.nombres;
  usuario.apellidos = req.body.apellidos;
  usuario.sexo = req.body.sexo;
  usuario.telefono_domicilio = req.body.telefono_domicilio;
  usuario.telefono_celular = req.body.telefono_celular;
  usuario.direccion = req.body.direccion;
  usuario.fecha_nacimiento = req.body.fecha_nacimiento;
  usuario.correo = req.body.correo;
  usuario.password = req.body.password;
  console.log(req.body.nombres);

  usuario.save(function(err){
    if(err){
      console.log(err);
      return;
    }else{
      res.redirect('/index');
    }
  });
});

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
