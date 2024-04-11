const mongodb = require("mongodb");
require("dotenv").config();
const mongoURI = process.env.MONGOURL + "bookMovie";

let mongoose = require("mongoose");
const connectToMongo = async () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
    });
};
exports.connection = connectToMongo;
