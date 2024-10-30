const express = require("express");
const path = require("path");
import connectDB from "./database";

const app = express();
app.use(express.json());

connectDB();

app.use("",);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

