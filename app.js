var express = require("express");

var app = express();

// view engine setup
app.set("view engine","jade");

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("varianteInicio");
});

app.get("/index",function(req,res){
  res.render("varianteInicio");
});

app.get("/catalogo",function(req,res){
  res.render("catalogo");
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

console.log("Servidor corriendo");
