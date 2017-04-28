var express = require('express');
var app = express();
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var bodyParser = require('body-parser');
var path = require('path');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./static')));

app.set('views', path.join(__dirname,'./views'));
app.set('view engine','ejs');

mongoose.connect('mongodb://localhost/quotes')

//Creating a "Blueprint for my "collection within my database""
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})

//Informing mongoose of my collection and naming the collection
mongoose.model('Quote', QuoteSchema);

//Assigning my collection to a variable for my to access within my server.js file.
var Quote = mongoose.model('Quote')


app.get('/', function(req,res){
  res.render('index')
})

app.post('/quotes', function(req,res){
  console.log("Form Submission",req.body)
  var quote = new Quote()
  quote.name = req.body.name
  quote.quote = req.body.quote
  quote.save(function(err){
    if (err) {
      console.log("Error trying to save", err)
    }
    res.redirect('/allquotes');
  })
})

app.get('/allquotes', function(req,res){
  Quote.find({},function(err,quotes){
  res.render('quotes', {quotes: quotes})})
})

app.listen(8000,function(){
  console.log("listening on port 8000")
})
