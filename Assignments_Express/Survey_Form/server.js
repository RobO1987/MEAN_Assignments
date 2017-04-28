var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();



app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'sessionKey'}));


app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render("index");
})

app.post('/submit', function(req,res){
  console.log("POST DATA \n\n",req.body)
  req.session.user = req.body
  console.log(req.session.user)
  res.redirect('/result')
})

app.get('/result', function(req,res){
  user_info = req.session.user
  res.render("result", {user:user_info});
})

app.listen(8000,function(){
  console.log("listening on port 8000");
})
