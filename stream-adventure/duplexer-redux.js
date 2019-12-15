const duplexer = require('duplexer2');
const through = require('through2');


module.exports = function (counter) {

    const writable = through({objectMode: true}, writeFunc, endFunc);
    //const writable = through.obj(writeFunc, endFunc);
    const duplex = duplexer({writableObjectMode: true}, writable, counter);

    const obj = {};
    function writeFunc(c, _, next){
        obj[c.country] = (obj[c.country]+1) || 1;
	next();
    }

    function endFunc(done){
        counter.setCounts(obj);
	done();
    }

    return duplex;

};

