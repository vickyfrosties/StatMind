const mongoose = require("mongoose");

// this model is for the new members "members" 
const membersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const Members = mongoose.model("Members", membersSchema);
module.exports = Members;

