var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var ColorSchema = new Schema({
  name      :String,
  products  : [{
                type:Schema.ObjectId,
                ref:"Product"
              }]
});

module.exports = mongoose.model("color", ColorSchema);
