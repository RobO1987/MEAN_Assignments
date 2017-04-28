console.log('Models.js File Ready To Go')

/////////////////////// MODEL REQUIREMENTS & SCHEMA ///////////////////////
var mongoose = require('mongoose');
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required:true,
    unique:true,
    minlength:3,
    maxlenght:20,
  },
  email: {
    type: String,
    required:true,
    unique:true,
    minlength:6,
    validate:{
      validator: function(value){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      },
      message:"Invalid Email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength:1024,
    validate: {
      validator: function(value){
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    },
  }
},{timestamps:true})
mongoose.model('User', userSchema)

var postSchema = mongoose.Schema({
  post: {type: String},
  userId: {type: String, ref:'User'},
  userName: {type: String, ref:'User'},
},{timestamps:true})
mongoose.model('Post', postSchema)

var commentSchema = mongoose.Schema({
  comment: {type: String},
  postId:{type:String, ref:'Post'},
},{timestamps:true})
mongoose.model('Comment', commentSchema)
