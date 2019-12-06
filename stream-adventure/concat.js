const concat = require('concat-stream');

function write(body){
    let result = body.toString().split('').reverse().join('');
    process.stdout.write(result) ;
}

const stream = concat(write);
process.stdin.pipe(stream);
