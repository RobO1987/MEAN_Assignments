console.log('Models_controller.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var mongoose = require('mongoose')
var User = mongoose.model("User");
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

/////////////////////// CONTROLLER FUNCTIONS ///////////////////////
module.exports.register = function(req,res){
  User.create(req.body,function(err,result){
    if(err){
      res.json(err)
    }else{
      console.log(result);
      res.json(result);
    }
  })
};

module.exports.addpost = function(req,res){
  Post.create(req.body,function(err,result){
    if(err){
      res.json(err)
    }else{
      console.log(result);
      res.json(result);
    }
  })
};

module.exports.getpost = function(req,res){
  Post.find({},function(err,results){
    if(err){
      console.log(err)
    }else{
      res.json(results);
    }
  })
};

module.exports.login = function (req,res){
  User.findOne({email:req.body.email},function(err,result){
    if(err){
      console.log('ERR ROUTE')
      console.log(err);
      res.json({ message: "ERROR", err: err });
    }

    else if (!result){
      console.log("EMAIL DOESN'T EXISTS ROUTE");
      res.json({err: "Email doesn't exist in our database"})
    }

    else if(result.password == req.body.password){
      console.log("PASSWORD EXISTS ROUTE")
      console.log(result);
      console.log('//////////')
      console.log(err);
      res.json({ message: "SUCCESS", result:result});

    }else if(result.password !== req.body.password){
      console.log("PASSWORD DOESN'T EXIST ROUTE")
      console.log(result);
      res.json({err:"Incorrect Password"})
    }
  });
};

module.exports.newcomment = function(req,res){
  console.log(req.body);
  Comment.create(req.body,function(err,result){
    if(err){
      console.log(err);
      res.json(err);
    }else{
      console.log(result);
      res.json(result);
    }
  })
}

module.exports.getcomments = function(req,res){
 Comment.find({}, function(err,result){
   if(err){
     res.json(err)
   }else{
     res.json(result)
   }
 })
}
