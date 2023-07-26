const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

//NOTE:GET ALL CATEGORY
router.get("/get-category-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Create
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Kategori eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

//NOTE:Update
router.put("/update-category", async (req, res) => {
  try {
    await Category.findByIdAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("update başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Delete
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Silme işlemi başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
