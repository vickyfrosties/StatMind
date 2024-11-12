const mongoose = require("mongoose");

// this model is for the new members "members" 
const membersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    authToken: { type: String },
});

const Members = mongoose.model("Members", membersSchema);
module.exports = Members;

