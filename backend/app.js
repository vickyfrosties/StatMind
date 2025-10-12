const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cron = require("node-cron");
const { statisticsController } = require("./controllers/dailyLog.controller");

// autorize requests between cross-origin
const cors = require("cors");
const jwtTool = require("./tools/jwt.tool");
// handles cookies session
const session = require("express-session");
const authRouter = require("./routes/auth.route");
const dailyLogRouter = require("./routes/dailyLog.route");

const serverPort = process.env.SERVER_PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// transfers the data in json
app.use(express.json());

// if there's a token it will be saved in all the files. Middleware to handle jwt
app.use((request, response, next) => {
  const authHeader = request.headers["authorization"];

  // split the response to only get the token part if token exist
  const token = authHeader && authHeader.split(" ")[1];

  // if there's no token then end it
  if (!token) {
    // next() goes on the next action
    next();
    return;
  }
  // token is a props of request object
  request.token = jwtTool.read(token);
  next();
});

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    // change to true if HTTPS request. Here HTTP ONLY
    cookie: { secure: false },
  })
);

cron.schedule("0 0 0 * * *", () => {
  statisticsController();
  console.log("Reset statistics at midnight.");
});

// Routes
app.use(authRouter);
app.use(dailyLogRouter);

app.listen(serverPort, () => {
  console.log(`Server is running on PORT ${serverPort}`);
});
