var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static('public'));
app.use(bodyParser.text());

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
