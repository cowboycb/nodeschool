const combine = require('stream-combiner');
const through = require('through2');
const split = require('split2');
const zlib = require('zlib');

let result = null;
function write(buffer, encoding, next){
    let buf = buffer.toString();
    if (buf.length !== 0){
        let item = JSON.parse(buf);
        // console.log("Gelen: ", item);
        if (item.type === 'genre'){
            if (result){
                this.push(JSON.stringify(result) + '\n');
                //console.log("Pushed: ", result);
            }
            result = { name: item.name, books: []};
        }else{
            (result.books).push(item.name);
        }
    }
    next();
}

function end(done) {
    if (result){
        this.push(JSON.stringify(result) + '\n');
        //console.log("Pushed: " , result);
    }
    done();
}


module.exports = function () {
    const streamt = through(write, end);
    const gzip = zlib.createGzip();
    return combine(split(), streamt, gzip);
};
