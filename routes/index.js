var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inicio');
});

router.get('/index', function(req,res,next){
  res.render('inicio');
});

router.get('/catalogo', function(req,res,next){
  res.render('catalogo');
});

router.get('/contacto', function(req,res,next){
  res.render('contacto');
});

router.get("/micarrito",function(req,res){
  res.render("micarrito");
});

router.get("/iniciosesion",function(req,res){
  res.render("iniciosesion");
});

router.get("/registro",function(req,res){
  res.render("registro");
});

router.get("/compras",function(req,res){
  res.render("paracompras");
  console.log(req.query.marca);
  console.log(req.query.producto_id);
});

router.get("/tiendas",function(req,res){
  res.render("tiendas");
  console.log(req.query.marca);
  console.log(req.query.producto_id);
});

module.exports = router;
