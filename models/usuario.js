var mongoose=require('mongoose');
    Schema = mongoose.Schema;

var  UsuarioSchema = new Schema({
  fechaIngreso :{
    type:Date,
    default:Date.now
  },
  cedula:String,
  nombres:String,
  apellidos:String,
  sexo:{
    type:String,
    items:['Femenino','Masculino']
  },
  telefono_domicilio:Number,
  telefono_celular:Number,
  direccion:String,
  fecha_Nacimiento:Date,
  rol:String,// si es Adminitrador, veedor, cliente
  correo :String,
  password : String,
  carrito:[{
    type:Schema.ObjectId,
    ref:"carrito"
  }]
},
{
  versionKey: false,
  collection: 'usuario'
});

module.exports = mongoose.model("Usuario",UsuarioSchema);
