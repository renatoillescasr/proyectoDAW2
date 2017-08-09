var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({

  image           : {
                      data: Buffer,
                      contentType: String
                    },
  slug            : String,
  price_incl_tax  : Number,
  price_excl_tax  : Number,
  stock           : Number,
  desc            : Number,
  catalogue       : {
                      type:Schema.ObjectId,
                      ref:"Catalogue"
                    },
  sizes           : [{
                      type:Schema.ObjectId,
                      ref:"Size"
                    }],
  colors          : [{
                      type:Schema.ObjectId,
                      ref:"Color"
                    }]
});

module.exports = mongoose.model("product", ProductSchema);
