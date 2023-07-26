const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

const app = express();
const port = process.env.PORT || 5000;

//Routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const carouselRoute = require("./routes/carousel.js");
const authRoute = require("./routes/auth.js");
const soruRoute = require("./routes/soru.js");

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodbye bağlandı");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/carousel", carouselRoute);
app.use("/api/auth", authRoute);
app.use("/api/soru", soruRoute);

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => {
  connect();
  console.log(`uygulama ${port} portuna çalıştı`);
});
