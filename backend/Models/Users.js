// this file is the model for mongoose which will indicates what types of data we want to fetch. 
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// compile a model from the schema properties
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

