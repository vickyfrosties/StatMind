const express = require("express");
const { registrationController, loginController, logoutController, getHistoryData } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/register", registrationController);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
authRouter.get("/history", getHistoryData);


module.exports = authRouter;