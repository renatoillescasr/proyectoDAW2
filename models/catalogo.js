var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var catalogo = new Schema({
  
  name:String,
  descripcion:String,
  //crear la relacion de "1-catalogo" con "*-producto"
  producto:[{
    type:Schema.ObjectId,
    ref:"producto"
  }]
  marca:[{
    type:Schema.ObjectId,
    ref:"marca"
  }]

});

module.exports = mongoose.model("Catalogos",CatalogoSchema);
