const net = require('net');
const timer = require('strftime');

const port = process.argv[2];

const server = net.createServer(socket => {
	socket.end(timer('%F %R', new Date()) + '\n');
});

server.listen(port);

