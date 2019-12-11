const http = require('http');
const through = require('through2');

const port = parseInt(process.argv[2]);

let convertToUpperCase = function(buffer, _, next){
    this.push(buffer.toString().toUpperCase());
    next(); 
}

const server = http.createServer((req, res) => {
    if (req.method == 'POST'){
	req.pipe(through(convertToUpperCase)).pipe(res);
    }
});

server.listen(port);

