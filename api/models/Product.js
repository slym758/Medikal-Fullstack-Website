const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String, require: true },
    img_2: { type: String, require: true },
    img_3: { type: String, require: true },
    img_4: { type: String, require: true },
    price: { type: Number, require: true },
    category1: { type: String, require: true },
    category2: { type: String, require: true },
    text: { type: String, require: true },
    title: { type: String, require: true },
  },
  {
    timetamps: true,
  }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
