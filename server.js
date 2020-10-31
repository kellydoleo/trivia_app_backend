const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = process.env.PORT || 4500;



///CONTROLLERS
const questionController = require("./controllers/trivia_questions")




// MONGOOSE CONNECTION
require("dotenv").config();
const { MONGODBURI } = process.env;
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;

mongoose.connect(MONGODBURI, config);

DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));



// MIDDLEWARE
app.use(express.json()); //use .json(), not .urlencoded()


//CORS 
app.use(cors()) // Note: all routes are now exposed. 

// QUESTION ROUTE
app.use("/", questionController)


///WEB SERVER
app.listen(PORT, () => {
    console.log(`🎉🎊 celebrations happening on port ${PORT} 🎉🎊`);
  });