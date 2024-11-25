const express = require("express");
const { newEntryController, historyController, statisticsController, lastEmotionController } = require("../controllers/dailyLog.controller");

const dailyLogRouter = express.Router();

dailyLogRouter.post("/form", newEntryController);
dailyLogRouter.get("/history", historyController);
dailyLogRouter.get("/statistics", statisticsController);
dailyLogRouter.get("/profile", lastEmotionController);

module.exports = dailyLogRouter;