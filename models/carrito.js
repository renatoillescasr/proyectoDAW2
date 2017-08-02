var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var carrito = new Schema({
  estado:{
    type:String,
    enum:['Guardado','Comprado'],
    default: 'Guardado'
  },
  fechaCreacion:{ type:Date, default:Date.now },
  fechaActualizacion:{ type:Date, default:Date.now },
  fechaEntrega:{ type:Date, default:Date.now },
  usuario:[{
    type:Schema.ObjectId,
    ref:"usuario"
  }],
  carrito-producto:{
    type:Schema.ObjectId,
    ref:"usuario"
  }
});

module.exports = mongoose.model("Marcas",MarcaSchema);
