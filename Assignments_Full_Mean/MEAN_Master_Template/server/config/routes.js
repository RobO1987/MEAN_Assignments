console.log('Routes.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var CONTROLLER_ROUTE = require('../controllers/{{MODELS_CONTROLLER}}.js')

/////////////////////// SERVER SIDE ROUTES ///////////////////////
module.exports = function(app){
  app.get('/{CONTROLLER_ROUTE}',function(req,res){{CONTROLLER_ROUTE}.index(req,res)});
  app.get('/{CONTROLLER_ROUTE}/:id',function(req,res){{CONTROLLER_ROUTE}.show(req,res)});
  app.post('/{CONTROLLER_ROUTE}',function(req,res){{CONTROLLER_ROUTE}.create(req,res)});
  app.put('/{CONTROLLER_ROUTE}/:id',function(req,res){{CONTROLLER_ROUTE}.update(req,res)});
  app.delete('/{CONTROLLER_ROUTE}/:id', function(req,res){{CONTROLLER_ROUTE}.delete(req,res)});
}
