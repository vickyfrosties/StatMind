const mongoose = require("mongoose");

// this model is for the data values that user will enter in the main form
const emotionsSchema = new mongoose.Schema(
    {
        username: { type: String, required: [true, "Username is required!"] },
        emotions: {
            type: [String],
            enum: ["Happy", "Sad", "Angry", "Disgust", "Surprised", "Overwhelmed", "Anxious"],
            required: [true, "Emotion is required!"],
        },
        description: { type: String, maxlength: 500, required: [true, "Please enter a description for today's mood."] },
        favoriteMusic: { type: String, maxlength: 500, required: [true, "Please enter a song for today's mood."] },
        favoriteBook: { type: String, maxlength: 500, required: [true, "Please enter a book for today's mood."] },
        pictureOfTheDay: { type: String, maxlength: 500, required: [true, "Please link a picture for today's mood."] },
        createdAt: { type: Date, default: Date.now }
    },
    // here the timestamps work automatically if there's no timestamp on client side then it will set it automatically
    { timestamps: true }
);

const EmotionsData = mongoose.model("EmotionsData", emotionsSchema);
module.exports = EmotionsData;
