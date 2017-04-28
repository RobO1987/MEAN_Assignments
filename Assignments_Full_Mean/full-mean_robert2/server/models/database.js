console.log("/server/models/database.js");

/////////////////////// MONGOOSE CONNECTION ///////////////////////
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/full-mean", function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Connected to Mongoose")
  }
})

/////////////////////// MODEL CONNECTIONS ///////////////////////
require("./item.js")
