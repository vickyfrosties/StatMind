const express = require("express");
const { newEntryController, historyController } = require("../controllers/dailyLog.controller");

const dailyLogRouter = express.Router();

dailyLogRouter.post("/form", newEntryController);
dailyLogRouter.get("/history", historyController);

module.exports = dailyLogRouter;