var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var producto = new Schema({
  id:Number,
  image:String,
  slug:String,
  price_incl_tox:Number,
  price_excl_tox:Number,
  tallas:{
    type:String,
    items:['S','M','L','XL']
  },
  stock:Number,
  desc:Number,
  //crear la relacion de "*-productos" en "1-catalogo"
  catalogo:{[
    type:Schema.ObjectId,
    ref:"catalogo"
  ]}
});

module.exports = mongoose.model("Productos",ProductoSchema);
