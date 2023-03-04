const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: { type: Object },
  username: { type: String },
});

module.exports = mongoose.model("User", userSchema);
