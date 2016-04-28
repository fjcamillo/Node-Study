var http = require('http')

http.createServer(function(err, res){
  http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
  });

}).listen(8080)
