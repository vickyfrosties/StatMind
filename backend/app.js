import express from "express";
const app = express();

app.use("/login", (request, response) => {
  response.send({
    token: "test123"
  });
});

app.listen(8000, () => { console.log("API UP ON HTTP://LOCALHOST:8000/LOGIN!"); });