var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controller');
var scheduler = require("./scheduler");

var app = express();
app.use(express.static('./client'));
app.use(bodyParser.json());

scheduler.job();

controller(app);

app.listen(3000);
