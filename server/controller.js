var path = require('path');

module.exports = (app) => {

    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, './index.html'));
    });
    
    app.post("/random", function(req,res){
        console.log(req.body)
    });

}