console.log("model_controller.js ready to go")

/////////////////////// REQUIREMENTS ///////////////////////
var mongoose = require('mongoose');
var Customer = mongoose.model("Customer");
var Product = mongoose.model("Product");
var Order = mongoose.model("Order");

/////////////////////// REPEAT FUNCTIONS ///////////////////////
function modelsResult(res, err, result){
  if(err){
    res.json(err)
  }else{
    res.json(result);
  }
}

/////////////////////// CUSTOMER CONTROLLER ///////////////////////
module.exports.newcustomer = function (req,res){
  Customer.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.getcustomers = function(req,res){
  Customer.find({}, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.deletecustomer = function(req,res){
  Customer.remove({_id:req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
};

/////////////////////// PRODUCTS CONTROLLER ///////////////////////
module.exports.getproducts = function(req,res){
  Product.find({}, function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.addproducts = function(req,res){
  Product.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.deleteproduct = function(req,res){
  Product.remove({_id:req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
}

/////////////////////// ORDERS CONTROLLER ///////////////////////
module.exports.getorders = function(req,res){
  Order.find({}).populate('customer').populate('product').exec( function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.createorders = function(req,res){
  Order.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.deleteorder = function(req,res){
  Order.remove({_id:req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
}
