const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const userRoutes = require('../src/routes/user.routes')

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("hello ashu");
});

app.use('/users', userRoutes)

module.exports = app;
