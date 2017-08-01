var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var marcas = new Schema({
  id:Number,
  nombre:String,
  logo:String,
  marca:[{
    type:Schema.ObjectId,
    ref:"catalogo"
  }]
});

module.exports = mongoose.model("Marcas",MarcaSchema);
