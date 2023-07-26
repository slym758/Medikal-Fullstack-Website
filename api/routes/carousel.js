const Carousel = require("../models/Carousel.js");
const express = require("express");
const router = express.Router();

//NOTE:GET ALL Product
router.get("/get-carousel-all", async (req, res) => {
  try {
    const carousel = await Carousel.find();
    res.send(carousel);
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Create
router.post("/add-carousel", async (req, res) => {
  try {
    const newCarousel = new Carousel(req.body);
    await newCarousel.save();
    res.status(200).json("Ürün eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

//NOTE:Update
router.put("/update-carousel", async (req, res) => {
  try {
    await Carousel.findByIdAndUpdate({ _id: req.body.carouselId }, req.body);
    res.status(200).json("update başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Delete
router.delete("/delete-carousel", async (req, res) => {
  try {
    await Carousel.findOneAndDelete({ _id: req.body.carouselId });
    res.status(200).json("Silme işlemi başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
