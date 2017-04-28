/////////////////// CONNECTIONS /////////////////
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose')
var validate = require('mongoose-validator')
mongoose.connect('mongodb://localhost/liger_dashboard');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

/////////////////// SCHEMA /////////////////
var LigerSchema = new mongoose.Schema({
  name: String
})

mongoose.model('Liger', LigerSchema);
var Liger = mongoose.model('Liger')

/////////////////// ROUTES /////////////////
app.get('/', function(req,res){
  Liger.find({}, function(err, ligers){
  res.render('index',{ligers:ligers})
  })
})

app.get('/liger/new',function(req,res){
  res.render('new');
})

app.get('/liger/:id',function(req,res){
  Liger.find({_id: req.params.id}, function(err,response){
    if(err){console.log(err);}
    res.render('detail', {liger: response});
  });
})

app.get('/liger/edit/:id',function(req,res){
  Liger.find({_id: req.params.id},
  function(err,response){
    if(err){console.log(err);}
    res.render('new_edit', {liger: response});
  });
})

app.post('/liger', function(req,res){

  var liger = new Liger()
  liger.name = req.body.name

  liger.save(function(err){
    if (err){
      console.log("error trying to save", err)
    }
    res.redirect('/');
  })
})

app.post('/liger/:id', function(req,res){
  Liger.update({_id:req.params.id}, req.body, function(err, result){
    if (err) {console.log(err);}
    res.redirect('/')
  });
})

app.post('/liger/destroy/:id', function(req,res){
  Liger.remove({ _id:req.params.id}, function(err,result){
    if(err){console.log(err);}
    res.redirect('/');
  });
})

/////////////////// PORT /////////////////
app.listen(8000,function(){
  console.log("You're currently listening on PORT 8000");
})
