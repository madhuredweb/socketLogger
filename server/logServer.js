var express, http, app, loggerMessages, server, io;

express = require('express');
http = require('http');
app = express();
loggerMessages = [ ];

app.set('port', 9900);
app.use(express.static(__dirname + '/../client'));
server = http.createServer(app);
io = require('socket.io').listen(server);

require('./socket.js')(io,loggerMessages)

server.listen(app.get('port'),function(){
	console.log("Log Start on Port: " + app.get('port'));
});

var router = express.Router();

router.get('logRoom',function(req,res,next){

  res.json({})

});

app.use("/",router);



