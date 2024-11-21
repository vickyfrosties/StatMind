const express = require("express");
const { newEntryController, historyController, statisticsController } = require("../controllers/dailyLog.controller");

const dailyLogRouter = express.Router();

dailyLogRouter.post("/form", newEntryController);
dailyLogRouter.get("/history", historyController);
dailyLogRouter.get("/statistics", statisticsController);

module.exports = dailyLogRouter;