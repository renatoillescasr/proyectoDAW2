var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//para conexion mongodb local
mongoose.connect('mongodb://daw:123@ds041821.mlab.com:41821/practica');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('mongoose connection successful');
});

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

// llamada a tabla Usuario en MONGODB
let Usuarios = require('./models/usuario.js');

// lEER DATOS DE MONGODB
app.get('/cargarUsuarios',function(req,res){
  Usuarios.find({},function(err,usuarios){
    if(err){
      console.log("error al leer la tabla");
    }
    else{
      res.render('usuario/cargarUsuarios',{
        usuarios: usuarios
      });
      console.log(usuarios.nombres);
    }
  });
});

// CARGAR DATOS INDIVIDUALES POR LA URL _id
app.get('/usuario/:id',function(req,res){
  Usuarios.findById(req.params.id, function(err, usuario){
    //console.log(usuario);
    //return;
    res.render('usuario/leerUsuario',{
      usuario:usuario
    });
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

  usuario.save(function(err){
    if(err){
      console.log(err);
      return;
    }else{
      res.redirect('/inicio');
    }
  });
});

//EDITAR DATOS DE USUARIOS
app.get('/usuario/editar/:id',function(req,res){
  Usuarios.findById(req.params.id, function(err, usuario){
    //console.log(usuario);
    //return;
    res.render('usuario/editarUsuario',{
      usuario:usuario
    });
  });
});

//ACTUALIZAR DATOS A MONGODB
app.post('/usuario/editar/:id',function(req,res){
  let usuario = {};
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

  let query = {_id:req.params.id}

  Usuarios.update(query, usuario, function(err){
    if(err){
      console.log(err);
      return;
    }else{
      res.redirect('/cargarUsuarios');
    }
  });
});

// ELIMINAR DATOS DE USUARIOS
app.delete('/usuario/:id', function(req, res){
  let query = {_id:req.params.id}
  Usuarios.remove(query, function(err){
      if(err){
        console.log(err);
        console.log("----aqui--");
      }
      res.send('Success');
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('No encontrado');
    err.status = 404;
    next(err);
});

module.exports = app;
console.log("Servidor corriendo");
