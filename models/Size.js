var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var SizeSchema = new Schema({
  name        : String,
  products    : [{
                  type:Schema.ObjectId,
                  ref:"Product"
                }]
});

module.exports = mongoose.model("size", SizeSchema);
