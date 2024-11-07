const mongoose = require("mongoose");

const membersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const Members = mongoose.model("Members", membersSchema);
module.exports = Members;

