const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const userRoutes = require('../src/routes/user.routes')
const cookiesParser = require('cookie-parser')
const captainRoutes =  require('../src/routes/captain.routes')

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookiesParser())

app.get("/", (req, res) => {
  res.send("hello ashu");
});

app.use('/users', userRoutes)

app.use('/captains',captainRoutes)

module.exports = app;
