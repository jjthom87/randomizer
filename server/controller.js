var path = require('path');

module.exports = (app) => {

    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, '../client/html/index.html'));
    });
    
    app.get('/randomizer', function(req,res){
        res.sendFile(path.join(__dirname, '../client/html/randomizer.html'));
    });

    app.post("/random", function(req,res){
        res.json(req.body)
    });

}