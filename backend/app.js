const express = require("express");
// used for database modeling
const mongoose = require("mongoose");
const Visitors = require("./Models/Visitors");
const Members = require("./Models/Members");
const app = express();

// autorize requests between cross-origin
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// transfers the data in json
app.use(express.json());

//  create the connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/register", async (request, response) => {

  try {
    console.log('Registration request received:', request.body);
    const visitor = new Visitors(request.body);
    await visitor.save();
    response.send("New Member registered!");
  }
  catch (error) {
    response.status(500).send("Error registering new member:", error);
  }
});

app.post("/login", async (request, response) => {
  console.log("Data received:", request.body);

  try {
    const member = new Members(request.body);
    await member.save();
    response.send("Member is connected !");
  }
  catch (error) {
    response.status(500).send("Error when member try to connect", error);
  }
});


app.listen(8000, () => {
  console.log("Server is running");
})

