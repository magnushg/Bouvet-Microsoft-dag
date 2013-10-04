var express = require("express"),	
	app = express(),
	port = 9900;

app.use(express.static("app"));
app.use("/vendor", express.static(__dirname + "/vendor"));
	
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.get('/message', function(req, res) {	
	res.json({message:'ok'});
});

app.listen(port);
console.log("Server started on port " + port);