const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors({}));
app.use(express.json());

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("User DB connected");
  })
  .catch(() => {
    (err) => console.log(err);
  });
