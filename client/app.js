

var host = "http://localhost:9900";

var socket = io.connect(host + '/realTimeLogger');

socket.on('connect',function (){
	console.log('Connection Established !');
})

socket.on('loggerMessage',function (data){
	var procData = JSON.parse(data);

	for(var i = 0; i < procData.length; i++){

	}
});

$(document).on('click','#sendMessage',function(){
	var message = $('#messageInput').val(); 
	socket.emit("loggerMessage", {sender: 'firstClient', message: message});
	return false;
})


//socket.emit("loggerRoom", {room_name : "logRoom1", room_number : "1"});

