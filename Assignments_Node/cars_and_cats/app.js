var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
  console.log('Client Request URL:', request.url);

  if(request.url === '/cars'){
    fs.readFile('views/car.html','utf8', function(errors,contents){
      console.log(errors)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
    })
  }

  else if(request.url === '/cats'){
    fs.readFile('views/cats.html','utf8', function(errors,contents){
      console.log(errors)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
      })
    }

  else if(request.url === '/cars/new'){
    fs.readFile('views/newcar.html','utf8', function(errors,contents){
      console.log(errors)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
      })
    }

  else if (request.url === '/images/car1.jpg'){
    fs.readFile('./images/car1.jpg', function(errors,contents){
      response.writeHead(200,{'Content-Type': 'images/jpg'});
      response.write(contents);
      response.end()
    })
  }

  else if (request.url === '/images/car2.jpg'){
    fs.readFile('./images/car2.jpg', function(errors,contents){
      response.writeHead(200,{'Content-Type': 'images/jpg'});
      response.write(contents);
      response.end()
    })
  }

  else if (request.url === '/images/cat1.jpg'){
    fs.readFile('./images/cat1.jpg', function(errors,contents){
      response.writeHead(200,{'Content-Type': 'images/jpg'});
      response.write(contents);
      response.end()
    })
  }

  else if (request.url === '/images/cat2.jpg'){
    fs.readFile('./images/cat2.jpeg', function(errors,contents){
      response.writeHead(200,{'Content-Type': 'images/jpg'});
      response.write(contents);
      response.end()
    })
  }

  else{
    response.end("File Not Found");
  }
})

server.listen(6789);
console.log("running on localhost PORT 6789")
