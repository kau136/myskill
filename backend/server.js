const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const CORS = require('cors');

const formRoute = require("./routes/formData.routes");

const app = express();

console.log("++++++++++++++SERVER STARTS++++++++++++++++++++");

app.use(CORS());
app.use(bodyParser.json());
app.use("/Signup", formRoute);


mongoose
  .connect(
    "mongodb+srv://hkkaushik:8954745517@cluster0.bbvpu.mongodb.net/reg?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
    console.log("Databaseconnected, running on PORT 3000");
  })
  .catch((err) => {
    console.log(err, "Connecting with DB failed!!!!");
  });