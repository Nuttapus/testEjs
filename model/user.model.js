const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  surname: String,
  doctype: String,
  user: String,
  password: String,
  salary: Number,
  ot: Number,
  bonus: Number
});

module.exports = mongoose.model("mst_employee", userSchema);
