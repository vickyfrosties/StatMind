const express = require("express");
// used for database modeling
const mongoose = require("mongoose");
const UsersModel = require("./Models/Users");
const cors = require('cors');
const app = express();

// autorize requests between cross-origin
app.use(cors());

// transfers the data in json
app.use(express.json());

//  create the connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/users");

// we're creating the route where we will get the request from and post it as a response from our database. This makes the link between front and backend.Post method
app.post('/register', async (request, response) => {
  console.log('Received data:', request.body);
  try {
    const member = new UsersModel(request.body);
    await member.save();
    response.send({ message: 'Member registered!' });
  }
  catch (error) {
    response.send({ message: 'Error registering member', error });
  }
});

app.listen(8000, () => {
  console.log("Server is running");
})

