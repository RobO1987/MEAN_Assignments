console.log("models.js file ready to go")

/////////////////////// MODEL REQUIREMENTS & SCHEMA ///////////////////////

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

/////////////////////// CUSTOMER SCHEMA ///////////////////////
var customerSchema = mongoose.Schema({
  name: {type:String},
},{timestamps:true})
mongoose.model('Customer', customerSchema);

/////////////////////// PRODUCT SCHEMA ///////////////////////
var productSchema = mongoose.Schema({
  name:{type:String},
  imgUrl:{type:String},
  description:{type:String},
  quantity:{type:Number},
},{timestamps:true})
mongoose.model('Product',productSchema);

/////////////////////// ORDER SCHEMA ///////////////////////
var orderSchema = mongoose.Schema({
  customer:{type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
  product:{type: mongoose.Schema.Types.ObjectId, ref:'Product'},
  quantity:{type:Number},
},{timestamps:true})
mongoose.model('Order', orderSchema)
