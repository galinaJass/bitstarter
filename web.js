var express = require('express');

var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//  response.send('Hello World!');
//});

var fs = require('fs');

app.get('/', function(request, response){
    buf = new Buffer(256);
    buf = fs.readFileSync('index.html');
    response.send(buf.toString());
});

//to see in a browser don't stop the process "node web.js"
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
