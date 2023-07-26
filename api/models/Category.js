const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  {
    timetamps: true,
  }
);

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;
