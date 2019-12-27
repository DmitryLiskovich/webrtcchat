const io = require('socket.io').listen(8081);
let timer;

io.on('connection', (socket)=>{
	socket.on('message', (message)=>{
		socket.broadcast.send(message)
	})
	socket.on('disconnect', ()=>{
		socket.send({message:`User has been disconnected`, type: 'connect'});
	})
})
