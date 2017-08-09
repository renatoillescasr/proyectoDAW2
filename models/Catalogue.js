var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var CatalogueSchema = new Schema({
  name        : String,
  description : String,
  product     : [{
                  type:Schema.ObjectId,
                  ref:"Product"
                }],
  brand       : {
                  type:Schema.ObjectId,
                  ref:"Brand"
                }
});

module.exports = mongoose.model("catalogue", CatalogueSchema);
