const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];
let stream = fs.createReadStream(filePath);
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    stream.pipe(response);
});

server.listen(port);

