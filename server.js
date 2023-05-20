var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./'));
app.use(bodyParser.json());


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, './index.html'));
});

app.post("/random", function(req,res){
	console.log(req.body)
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
