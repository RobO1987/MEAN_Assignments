console.log("/server.js");
var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

/////////////////////// DEPENDENCY USE ///////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/////////////////////// CLIENT DIRECTORY ///////////////////////
app.use(express.static(path.join(__dirname,"client")));
app.use(express.static(path.join(__dirname,"bower_components")))

/////////////////////// CONNECTIONS TO ROUTES & DATABASE ///////////////////////
require("./server/models/database");
require("./server/routes/routes")(app);


app.listen(3000,function(){
  console.log("Listening on Port 3000")
})
