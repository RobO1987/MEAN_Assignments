var mongoose = require('mongoose');
var express = require('express');
var bp = require('body-parser');
var path = require('path');
var root = __dirname;
var port = process.env.PORT || 8000;
var app = express();

app.use(express.static(path.join(root, "client")));
app.use(express.static(path.join(root, 'bower_components')));

app.use(bp.json());

app.listen(port, function(){
  console.log('server running on port', port);
});
