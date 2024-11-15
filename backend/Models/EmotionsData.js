const mongoose = require("mongoose");

// this model is for the data values that user will enter in the main form
const emotionsSchema = new mongoose.Schema({
    username: { type: String, require: true },
    timestamp: { type: Date, default: Date.now, require: true },
    emotions: { type: [String], enum: ["Happy", "Sad", "Angry", "Disgust", "Surprised", "Overwhelmed", "Anxious"], required: true },
    description: { type: String, maxLength: 500, require: true },
    favotireMusic: { type: String, maxLength: 500, require: true },
    favotireBook: { type: String, maxLength: 500, require: true },
    pictureOfTheDay: { type: String, maxLength: 500, require: true },
});

const EmotionsData = mongoose.model("EmotionsData", emotionsSchema);
module.exports = EmotionsData;
