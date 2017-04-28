console.log('Models.js File Ready To Go')

/////////////////////// MODEL REQUIREMENTS & SCHEMA ///////////////////////
var mongoose = require('mongoose');
var {{MODEL}}Schema = mongoose.Schema({
  {{MODEL}}:String,
  {{MODEL}}:Date,
  {{MODEL}}:Boolean
},{timestamps:true});

mongoose.model('{{MODEL}}', ToDoSchema)
