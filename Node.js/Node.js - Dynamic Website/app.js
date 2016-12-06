var router = require("./routes/router.js");
var express = require('express');

//Problem: We need a simple way to look at a user's badgecount and JavaScript points from a web broswer
//Solution: Use node.JS to perform the profile look ups and serve our templates via http

// Create a web server without express
// var http = require('http');

// create web server with express
var app = express();

// Serves static files in the "public" directory
app.use(express.static(__dirname + '/public'));

// CREATE SERVER WITH EXPRESS
// GET
app.get('/', function(req, res) {
  router.home(req, res);
  router.user(req, res);
});
// POST
app.post('/', function(req, res) {
	router.home(req, res);
  router.user(req, res);
});
// GET USERNAME
app.get('/:username', function(req, res){
	router.user(req, res);
})
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

// CREATE SERVER WITHOUT EXPRESS
// http.createServer(function (request, response){
//     router.home(request, response);
//     router.user(request, response);
// }).listen(3000);
// console.log('Server running at http://<workspace-url>/');
