// This is a basic server to test serving the static build files for the site to ie8

var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
