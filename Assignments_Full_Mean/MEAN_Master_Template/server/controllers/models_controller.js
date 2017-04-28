console.log('Models_controller.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var mongoose = require('mongoose')
var {{MODEL}} = mongoose.model('{{MODEL}}')

/////////////////////// CONTROLLER FUNCTIONS ///////////////////////
function {{MODEL}}Controller(){
  this.index = function(req,res){
    {{MODEL}}.find({},function(err,results){
      if(err){
        console.log(err)
      }else{
        res.json(results);
      }
    })
  };

  this.create = function(req,res){
    {{MODEL}}.create(req.body,function(err,result){
      if(err){
        console.log(err)
      }else{
        res.json(result);
      }
    })
  };
}

module.exports = new {{MODEL}}Controller();
