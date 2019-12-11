const trumpet = require('trumpet');
const through = require('through2');

function toUpper(buffer, _, next){
    this.push(buffer.toString().toUpperCase());
    next();
}

let tr = trumpet();

tr.selectAll('.loud', function(el){
    let stream = el.createStream();
    stream.pipe(through(toUpper)).pipe(stream);
});


process.stdin.pipe(tr).pipe(process.stdout);

