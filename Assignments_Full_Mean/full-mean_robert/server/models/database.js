console.log("/server/config/database.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/full-mean-RO", function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Connected to Mongoose");
  }
});
require("../models/items");
