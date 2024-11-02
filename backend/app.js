const express = require("express");
// used for database modeling
const mongoose = require("mongoose");
const cors = require('cors');
const Users = require("./Models/Users");
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

  // async function createMember(body) {
  //   const  =  await Books.create({
  //       title : body.title,
  //       serie:body.serie,
  //       volume : body.volume,
  //       author : body.author,
  //       category : body.category,
  //       summary : body.summary,
  //       opinion : body.opinion,
  //       finished: body.finished,
  //       type : body.type,
  //       returned: body.returned,
  //       lent: body.lent,
  //       borrower: body.borrower
  //   })

  //   const result = await newBook.save()
  //   return result
  // }

  try {
    const member = new Users(request.body);
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

