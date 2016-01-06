module.exports = function (io,loggerMessages){

	 var logger = io.of('/realTimeLogger').on('connection',function(socket){
	 		
	 	 socket.on('loggerMessage',function (data){
	 	 	console.log("got message: " + data.message + ' from ' + data.sender)
		 	 loggerMessages.push(data);
		 	 socket.broadcast.emit('loggerMessage', JSON.stringify(loggerMessages));
	 	});

	 	 socket.on('loggerBinaryMessage',function (data){
		 	 socket.broadcast.emit('loggerBinaryMessage', data);
	 	});
	 });


}