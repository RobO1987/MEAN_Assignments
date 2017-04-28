var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){

  console.log('Client Request URL:', request.url);

  if(request.url === '/'){
    fs.readFile('index.html','utf8', function(errors,contents){
      console.log(errors)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
    })
  }

  else if (request.url === '/ninjas'){
    fs.readFile('ninjas.html', 'utf8', function(errors,contents){
      console.log(errors)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
    })
  }

  else if (request.url === '/dojos/new'){
    fs.readFile('dojos.html', 'utf8', function(errors,contents){
      console.log(errors)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
    })
  }

  else{
    response.end('File Not Found!!!');
  }

});
server.listen(6789);
console.log("Running in localhost at PORT 6789")
