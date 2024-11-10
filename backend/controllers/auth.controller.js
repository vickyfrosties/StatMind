const Members = require("../Models/Members");
const Visitors = require("../Models/Visitors");
const mongoose = require("mongoose");
const jwtTool = require("../tools/jwt.tool");

// connection with db
mongoose.connect("mongodb://127.0.0.1/users");

// Async request data from database
async function registrationController(req, res) {

  try {
    const { username, email, password } = req.body;
    const visitor = new Visitors({ username, email, password });
    await visitor.save();

    const data = { username, email, password };

    // generates the token
    const token = jwtTool.generate(data);
    res.status(200).json({ token });

    // it saves the token in the db
    visitor.authToken = token;

    // update the token
    await visitor.save();
  }

  catch (error) {
    console.error("Error registering new member:", error);
    res.status(500).send("Error registering new member");
  }
}


async function loginController(req, res) {
  console.log("Data received:", req.body);

  try {
    const { username, password } = req.body;
    const member = new Members({ username, password });
    await member.save();
    res.send("Member is connected !");

    // TODO - token verification
    if (username !== req.username || password !== req.password) {
      res.send({ error: "There is no existing account for this username, please create a new account or try again" });
    }

  }
  catch (error) {
    res.status(500).send("Error when member try to connect", error);
  }

  return;
}
module.exports = { registrationController, loginController };