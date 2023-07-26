const User = require("../models/User.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

//NOTE:REGİSTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json("User Oluşturuldu");
  } catch (error) {
    res.status(400).json(error);
  }
});

//NOTE:LOGİN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send({ error: "Kullanıcı Bulunamadı" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).send({ error: "Parola Yanlış" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
