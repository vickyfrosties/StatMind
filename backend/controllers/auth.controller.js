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
    // const visitor = new Visitors({ username, email, password });
    // await visitor.save();

    // check if the username already exist
    const existingMember = await Members.findOne({ username });
    if (existingMember) {
      return res.status(400).json({ error: "Username already exist. Please choose another one." });
    }

    const data = { username, email };
    // generates the token
    const token = jwtTool.generate(data);

    const newMember = new Members({ username, email, password, authToken: token });
    await newMember.save();
    res.status(201).json({ message: "Account created successfully !", token });

    // it saves the token in the db
    // visitor.authToken = token;

    // update the token
    // await visitor.save();
  }

  catch (error) {
    console.error("Error registering new member:", error);
    res.status(500).send("Error registering new member");
  }
}

async function loginController(req, res) {

  try {
    const { username, password, token } = req.body;

    const memberCreds = await Members.findOne({ username, password });

    // check if the account does exist by its username & pwd
    if (!memberCreds) {
      return res.status(404).json({ error: "No account found with this username. Please register." });
    }

    // Check if the provided token matches the stored token
    if (memberCreds.authToken !== token) {
      console.error("error:", error);
      return res.status(401).json({ error: "Invalid token. Access denied." });
    }

    res.status(200).json({ success: "Access authorized!" });
    // await memberCreds.save();
  }

  catch (error) {
    res.status(500).send("Error when member tries to connect", error);
  }

}
module.exports = { registrationController, loginController };