console.log('Server.js File Ready To Go')

/////////////////////// SERVER REQUIREMENTS ///////////////////////
var express = require('express');
var bp = require('body-parser');
var path = require ('path');
var app = express();

/////////////////////// EXPRESS CONNECTIONS - CLIENT SIDE ///////////////////////
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bp.json());

/////////////////////// SERVER SIDE CONNECTIONS ///////////////////////
require('./server/config/mongoose_server.js');
require('./server/config/routes.js')(app);

/////////////////////// PORT ///////////////////////
app.listen(8888, function(){
  console.log('server listening on port', 8888);
})
