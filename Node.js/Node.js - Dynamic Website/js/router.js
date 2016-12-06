var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var queryString = require("querystring");

var commonHeader = {'Content-Type': 'text/html'};
// Handle the HTTP route GET / and POST / i.e. Home
function home (request,response){
    //if URL == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      response.writeHead(200, commonHeader);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      //get the post data from body
      request.on("data", function(postBody){
        console.log(postBody.toString()); 
        //extract the username
        var query = queryString.parse(postBody.toString());
        response.writeHead(303, {"location": "/" + query.username});
        response.end();
          
      //redirect to /:username
      });
     
    }
    
  };
};


// Handle the HTTP route GET /:username i.e. /kellymersereau
function user(request, response) {
   //if URL == "/..."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, commonHeader);
    renderer.view("header", {}, response);
    
    //get JSON from Treehouse
    var studentProfile = new Profile(username);
    //on the end (all data comes back)
    studentProfile.on("end", function(profileJSON){
      //show profile
      
      //store the valuees which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javaScriptPoints: profileJSON.points.JavaScript,
      };
      
      //simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });
    
    //on "error"
    studentProfile.on("error", function(error){
      //show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });

  }
}

//export router
module.exports.home = home;
module.exports.user = user;