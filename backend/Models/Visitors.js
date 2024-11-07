// this file is the model for mongoose which will indicates what types of data we want to fetch.

// this model is for the new members here, I will call them visitors. 
const mongoose = require("mongoose");

const visitorsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// compile a model from the schema properties
const Visitors = mongoose.model("Visitors", visitorsSchema);
module.exports = Visitors;

