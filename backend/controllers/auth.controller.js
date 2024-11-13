const Members = require("../Models/Members");
const mongoose = require("mongoose");
const jwtTool = require("../tools/jwt.tool");
const bcrypt = require("bcrypt");

// connection with db
mongoose.connect("mongodb://127.0.0.1/users");

// Async request data from database
async function registrationController(req, res) {

  try {
    const { username, email, password } = req.body;

    // check if the username already exist
    const existingMember = await Members.findOne({ username });
    if (existingMember) {
      return res.status(400).json({ error: "Username already exist. Please choose another one." });
    }

    // generate a salt. 10 is the default value
    const salt = await bcrypt.genSalt();

    // this gets the current password in db and hash it
    const hash = await bcrypt.hash(password, salt);
    // const passwordHshd = await Members.create({ username, email, password: hash });

    const data = { username, email };

    // generates the token
    const token = jwtTool.generate(data);

    const newUser = await Members.create({ username, email, password: hash, authToken: token });

    res.status(201).json({ message: "Account has been created successfully !", token });
  }

  catch (error) {
    console.error("Error registering new member:", error);
    res.status(500).send("Error registering new member");
  }
}

async function loginController(req, res) {

  try {
    const { username, password } = req.body;

    // try to find the username & pwd if they exist
    const memberCreds = await Members.findOne({ username });

    // compare if the username & pwd stocked in the db are the same as the ones that the user is entering
    if (!memberCreds) {
      return res.status(400).json({ error: "There's no account with this username. Please create an account." });
    }
    // using bcrypt.compare to compare the pwd in db and the one in input
    const isPwdValid = await bcrypt.compare(password, memberCreds.password);

    // if pwd is valid then operation is a success
    if (isPwdValid) {
      return res.status(200).json({ success: "Credentials valid. Access authorized.", username: memberCreds.username });
    }

    else {
      res.status(400).json({ error: "Username and password not correct. Please try again." });
    }
  }

  catch (error) {
    res.status(500).send("Error when member tries to connect", error);
    console.error("Error when member tries to connect:", error);
  }

}
module.exports = { registrationController, loginController };