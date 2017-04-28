console.log("mongoose_server.js file ready to go")

/////////////////////// MONGOOSE REQUIREMENTS ///////////////////////
var mongoose = require('mongoose');
var fs = require('fs');
var path = require ('path');

/////////////////////// MONGOOSE DB CONNECTION ///////////////////////
mongoose.connect('mongodb://localhost/StoreDB')
require('../models/models.js')
