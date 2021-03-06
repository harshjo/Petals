const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

mongoose.connect("mongodb://localhost/petal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyparser.json());
app.use("/", require("./app/api"));
app.use("/", require("./app/search"));
app.use("/", require("./app/signup"));

app.listen(3000);
