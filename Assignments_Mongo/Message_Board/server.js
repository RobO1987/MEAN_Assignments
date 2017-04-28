/////////////////// CONNECTIONS /////////////////
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose')
var validate = require('mongoose-validator')
mongoose.connect('mongodb://localhost/message_board');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

/////////////////// SCHEMA /////////////////
  /////////////////// Message Schema
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
  _comments: [{type: Schema.Types.ObjectId, ref:"Comment"}]
});
  /////////////////// Message Schema Validations
  MessageSchema.path('name').required(true,'Name cannot be blank');
  MessageSchema.path('message').required(true,'Message cannot be blank');
  mongoose.model("Message", MessageSchema);

  /////////////////// Commment Schema
var Message = mongoose.model("Message");
var CommentSchema = new mongoose.Schema({
  name:String,
  text:String,
  _message:{type:Schema.Types.ObjectId, ref:'Message'}
});
  /////////////////// Comment Schema Validations
  CommentSchema.path('name').required(true, 'Name cannot be blank');
  CommentSchema.path('text').required(true, 'Comment cannot be blank');
  mongoose.model("Comment", CommentSchema);
  var Comment = mongoose.model("Comment");

/////////////////// ROUTES /////////////////
app.get('/',function(req,res){
  Message.find({})
  res.render('index', {messages: messages});
})

app.post('/message', function(req,res){
  var newMessage = new Message({name:req.body.name, message:req.body.message})
  newMessage.save(function(err){
    if(err){
      console.log(err);
      res.render('index.ejs', {errors: newMessage.errors});
    } else{
      console.log("success");
      res.redirect('/');
    }
  })
})

app.post("/comment/:id", function(req,res){
  var message_id = req.params.id;
  Message.findOne
})



/////////////////// PORT /////////////////
app.listen(8000,function(){
  console.log("You're currently listening on PORT 8000");
})
