console.log('Todo_server_model.js File Ready To Go')

/////////////////////// MODEL REQUIREMENTS & SCHEMA ///////////////////////
var mongoose = require('mongoose');
var ToDoSchema = mongoose.Schema({
  todoItem:String,
  dueDate:Date,
  completed:Boolean
},{timestamps:true});

mongoose.model('ToDoItem', ToDoSchema)
