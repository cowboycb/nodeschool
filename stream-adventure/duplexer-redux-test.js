const redux = require('./duplexer-redux');
const stream = require('stream');

const readable = new stream.Readable({objectMode: true});


readable.setCounts = function(param){
console.log("Return param: ", param);
};

readable._read = function(){
};

const duplex = redux(readable);

duplex.write({"short":"OH","name":"Ohio","country":"US"});
duplex.write({"name":"West Lothian","country":"GB","region":"Scotland"});
duplex.write({"short":"NSW","name":"New South Wales","country":"AU"});


duplex.end();


