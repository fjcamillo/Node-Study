var http = require("http");

var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end("Hi Mr. Finn");
});

server.listen(8080);
