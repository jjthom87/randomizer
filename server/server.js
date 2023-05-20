var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controller');

var app = express();
app.use(express.static('./client'));
app.use(bodyParser.json());

controller(app);

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
