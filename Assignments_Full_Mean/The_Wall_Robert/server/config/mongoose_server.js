console.log('Mongoose_server.js File Ready To GO')

/////////////////////// MONGOOSE REQUIREMENTS ///////////////////////
var mongoose = require('mongoose');
var fs = require('fs');
var path = require ('path');

/////////////////////// MONGOOSE DB CONNECTION ///////////////////////
mongoose.connect('mongodb://localhost/theWallDB')
require('../models/models.js')
