const express = require("express");
const { newEntryController } = require("../controllers/dailyLog.controller");

const dailyLogRouter = express.Router();

dailyLogRouter.post("/form", newEntryController);

module.exports = dailyLogRouter;