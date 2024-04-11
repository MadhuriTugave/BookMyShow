const mongodb = require("mongodb");
<<<<<<< HEAD
require("dotenv").config();
=======
// require ("dotenv").config();
let mongoose = require("mongoose");
>>>>>>> df74e3e7dd56194d7cbf60d468243b3073161201
const mongoURI = process.env.MONGOURL + "bookMovie";


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
