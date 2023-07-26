const mongoose = require("mongoose");

const SoruSchema = mongoose.Schema(
  {
    soru: { type: String, require: true },
    cevap: { type: String, require: true },
  },
  {
    timetamps: true,
  }
);

const Soru = mongoose.model("soru", SoruSchema);

module.exports = Soru;
