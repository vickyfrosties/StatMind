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
        const existingMember = await EmotionsData.findOne({ username }).sort({ createAt: -1 });
        if (existingMember) {
            res.status(200).json();
        }
    }
    catch (error) {
        console.error("Error fetching history data", error);
        res.status(500).json({ error: "Failed to fetch user history" });
    }
}

async function statisticsController(req, res) {
    try {
        const { username, emotions, createdAt } = req.query;
        const statistics = await EmotionsData.find({ username }, "username emotions createdAt");
        if (statistics.length === 0) { console.log("No data found for the given parameters."); }
        console.log(statistics);
        res.status(201).json(statistics);
    }
    catch (error) {
        console.error("Error fetching statistics", error);
        res.status(500).json({ error: "Failed to fetch user data statistics" });
    }
}

async function lastEmotionController(req, res) {
    try {
        const { username, emotions } = req.body;
        const lastEmotion = await EmotionsData.findOne({}, "emotions").sort({ createdAt: -1 });
        if (lastEmotion.length === 0) {
            console.log("Emotion not found");
        }
        res.status(201).json(lastEmotion);
    }
    catch (error) {
        console.error("Error with emotion data");
        res.status(500).json({ error: "Failed to get emotion" });
    }

}

module.exports = { newEntryController, historyController, statisticsController, lastEmotionController };