const express = require("express");
import User from "./user";

const AuthRouter = express.Router();

AuthRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!User) {
      return res.status(400).json({ message: " Username or Password not correct" });
    }


  }
});