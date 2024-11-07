const express = require("express");
// used for database modeling
const mongoose = require("mongoose");
const cors = require("cors");
const Visitors = require("./Models/Visitors");
const Members = require("./Models/Members");
const app = express();

// autorize requests between cross-origin

app.use(cors({
  origin: process.env.API_URL,
  credentials: true
}));

// transfers the data in json
app.use(express.json());

//  create the connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/register", async (request, response) => {
  console.log('Data received:', request.body);

  try {
    const visitor = new Visitors(request.body);
    await visitor.save();
    response.send({ message: 'New Member registered!' });
  }
  catch (error) {
    response.status(500).send({ message: 'Error registering new member', error });
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
    response.status(500).send({ message: "Error when member try to connect", error });
  }
});


app.listen(8000, () => {
  console.log("Server is running");
})

