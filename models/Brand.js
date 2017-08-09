var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var BrandSchema = new Schema({
  name      :String,
  logo      :String,
  catalogue :[{
                type:Schema.ObjectId,
                ref:"Catalogue"
            }]
});

module.exports = mongoose.model("brand", BrandSchema);
