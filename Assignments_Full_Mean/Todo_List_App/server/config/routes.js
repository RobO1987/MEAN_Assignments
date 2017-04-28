console.log('Routes.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var todos = require('../controllers/todo_server_controller.js')

/////////////////////// SERVER SIDE ROUTES ///////////////////////
module.exports = function(app){
  app.get('/todos',function(req,res){todos.index(req,res)});
  app.get('/todos/:id',function(req,res){todos.show(req,res)});
  app.post('/todos',function(req,res){todos.create(req,res)});
  app.put('/todos/:id',function(req,res){todos.update(req,res)});
  app.delete('/todos/:id', function(req,res){todos.delete(req,res)});
}
