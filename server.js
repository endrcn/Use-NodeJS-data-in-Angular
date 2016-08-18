var express = require("express");
var app = express();
var cons = require('consolidate');

//Public Data
app.use(express.static(__dirname + '/public'));

//Middleware
//Template Configuration
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/", function(req, res){
	res.send("Açıldı");
})

app.get("/claim/:id", function(req, res){
	res.render('claim-note', { title: 'claim', noteId:req.params["id"]});
});


app.listen(3400, function(){
	console.log("Listening port: " + 3400);
});