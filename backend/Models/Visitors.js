// This is a model from mongoose that will indicate what types of data we want to fetch.
// this model is for the new members "visitors" 
const mongoose = require("mongoose");

const visitorsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  authToken: { type: String }
});

// compile a model from the schema properties
const Visitors = mongoose.model("Visitors", visitorsSchema);
module.exports = Visitors;

