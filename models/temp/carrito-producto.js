var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var CarritoProductoSchema = new Schema({
  cantidad:Number,
  fechaCreacion:{ type:Date,default:Date.now },
  carrito:{
    type:Schema.ObjectId,
    ref:"carrito"
  },
  producto:[{
    type:Schema.ObjectId,
    ref:"producto"
  }]
});

module.exports = mongoose.model("carrito_producto",CarritoProductoSchema);
