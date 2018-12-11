/*
*
* Homework 1
*
*/

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var urlDetails = url.parse(req.url);

  var path = urlDetails.pathname.replace(/^\/|\/$/g, '');
  if (path == "hello") {

    res.setHeader('content-type', 'application/json');
    payloadstring = JSON.stringify({ message: "Homework 1 is done, World." }); 
    res.end(payloadstring);
  
  } else {
    res.statusCode = 404;
    res.end();
  }

});

var httpPort = 3000;
server.listen(httpPort, function () {
  console.log("Server is started and listening on port " + httpPort);
});
