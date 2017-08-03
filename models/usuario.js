var mongoose=require('mongoose');
    Schema = mongoose.Schema;

var  UsuarioSchema = new Schema({
  fecha_ingreso :{
    type:Date,
    default:Date.now
  },
  cedula:{ type:String, required:true },
  nombres:{ type:String, required:true },
  apellidos:{ type:String, required:true },
  sexo:{
    type:String,
    enum:['Femenino','Masculino']
  },
  telefono_domicilio:Number,
  telefono_celular:Number,
  direccion:{ type:String, required:true },
  fecha_nacimiento:Date,
  rol:{
    type:String,
    enum:['Cliente','Administrador','Moderador'],
    default:'Cliente'
  },
  correo:{ type:String, required:true },
  password : String,
  /*
  carrito:[{
    type:Schema.ObjectId,
    ref:"carrito"
  }]*/
});

module.exports = mongoose.model("Usuario",UsuarioSchema);
