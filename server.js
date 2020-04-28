var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8082;

app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
  //Jarvis
  console.log('Welcome back, sir. Your app is listening on port: ', PORT);
});
