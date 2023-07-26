const mongoose = require("mongoose");

const CarouselSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  {
    timetamps: true,
  }
);

const User = mongoose.model("carousel", CarouselSchema);

module.exports = User;
