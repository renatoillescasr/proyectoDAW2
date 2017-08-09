var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var MarcaSchema = new Schema({
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
  carrito_producto:{
    type:Schema.ObjectId,
    ref:"usuario"
  }
});

module.exports = mongoose.model("Marcas",MarcaSchema);
