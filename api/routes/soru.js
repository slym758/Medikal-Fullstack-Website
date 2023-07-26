const Soru = require("../models/Soru.js");
const express = require("express");
const router = express.Router();

//NOTE:GET ALL Product
router.get("/get-soru-all", async (req, res) => {
  try {
    const soru = await Soru.find();
    res.send(soru);
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Create
router.post("/add-soru", async (req, res) => {
  try {
    const newSoru = new Soru(req.body);
    await newSoru.save();
    res.status(200).json("Ürün eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

//NOTE:Update
router.put("/update-soru", async (req, res) => {
  try {
    await Soru.findByIdAndUpdate({ _id: req.body.SoruId }, req.body);
    res.status(200).json("update başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Delete
router.delete("/delete-soru", async (req, res) => {
  try {
    await Soru.findOneAndDelete({ _id: req.body.soruId });
    res.status(200).json("Silme işlemi başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
