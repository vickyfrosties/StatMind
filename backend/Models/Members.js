const mongoose = require("mongoose");

// this model is for the new members "members" 
const membersSchema = new mongoose.Schema({
    username: { type: String, required: [true, "Username is required "], unique: true },
    email: { type: String, required: [true, "Email is required "], unique: true },
    password: { type: String, required: [true, "Password is required "] },
    authToken: { type: String },
});

const Members = mongoose.model("Members", membersSchema);
module.exports = Members;

