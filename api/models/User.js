const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timetamps: true,
  }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
