console.log('Todo_server_controller.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var mongoose = require('mongoose')
var todo = mongoose.model('ToDoItem')

/////////////////////// CONTROLLER FUNCTIONS ///////////////////////
function todoController(){
  this.index = function(req,res){
    todo.find({},function(err,results){
      if(err){
        console.log(err)
      }else{
        res.json(results);
      }
    })
  };

  this.create = function(req,res){
    todo.create(req.body,function(err,result){
      if(err){
        console.log(err)
      }else{
        res.json(result);
      }
    })
  };
}

module.exports = new todoController();
