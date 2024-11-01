// this file is the model for mongoose which will indicates what types of data we want to fetch. 
const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// compile a model from the schema to create a collection, here "members"
const UsersModel = mongoose.model("members", UsersSchema);
module.exports = UsersModel;

