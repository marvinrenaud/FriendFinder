// DEPENDENCIES
var path = require('path');


// ROUTING
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
  });

  app.get('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, '../data/friends.js'));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
