// DEPENDENCIES
var path = require("path");
var friends = require("../data/friends");


// ROUTING
module.exports = function(app) {

  app.get("/api/friends", function(req, res){
    res.json(friends);
  });





};
