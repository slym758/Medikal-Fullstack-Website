const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

//NOTE:GET ALL Product
router.get("/get-product-all", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Create
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Ürün eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

//NOTE:Update
router.put("/update-product", async (req, res) => {
  try {
    await Product.findByIdAndUpdate({ _id: req.body.ProductId }, req.body);
    res.status(200).json("update başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

//NOTE:Delete
router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("Silme işlemi başarıyla gerçekleşti.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
