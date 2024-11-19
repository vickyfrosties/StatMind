const mongoose = require("mongoose");
const EmotionsData = require("../Models/EmotionsData");

// create connection w database
mongoose.connect("mongodb://127.0.0.1/users");

async function newEntryController(req, res) {

    try {
        // getting all the data values
        const { username, emotions, description, favoriteMusic, favoriteBook, pictureOfTheDay } = req.body;

        const entry = await EmotionsData({
            username,
            emotions,
            description,
            favoriteMusic,
            favoriteBook,
            pictureOfTheDay
        });

        await entry.save();
        return res.status(201).json("Entry validation is a success");
    }

    catch (error) {
        console.error("Error while trying to add data", error);
        res.status(500).json("Error", error);
    }
}

async function historyController(req, res) {
    try {
        const { username } = req.body;
        const existingMember = await EmotionsData.find({ username }).sort({ createAt: -1 });
        if (existingMember) {

            res.status(200).json();
        }
    }
    catch (error) {
        console.error("Error fetching history data", error);
        res.status(500).json({ error: "Failed to fetch user history" });
    }
}

module.exports = { newEntryController, historyController };