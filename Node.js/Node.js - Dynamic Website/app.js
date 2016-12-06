var router = require("./js/router.js");

//Problem: We need a simple way to look at a user's badgecount and JavaScript points from a web broswer
//Solution: Use node.JS to perform the profile look ups and serve our templates via http

// Create a web server
var http = require('http');
http.createServer(function (request, response){
    router.home(request, response);
    router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');

