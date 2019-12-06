const through = require('through2');
const split = require('split2');

let counter = 1;
function write(buffer, encoding, next){
    let buf = buffer.toString();
    if (counter%2 === 0)
	buf = buf.toUpperCase();
    else
        buf = buf.toLowerCase();
    counter++;
    this.push(buf+'\n');
    next();
}

const stream = through(write);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
//process.stdin.pipe(split()).pipe(process.stdout);
