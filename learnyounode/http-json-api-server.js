const http = require('http');
const url = require('url');

const port = process.argv[2];

function parseTime(date){
    return {
	hour: date.getHours(),
	minute: date.getMinutes(),
	second: date.getSeconds()
    };
}

function unixTime(date){
    return { unixtime: date.getTime() };
}

const server = http.createServer((request, response) => {
    let reqUrl = url.parse(request.url, true);
    let qparams = reqUrl.query;
    //console.log(reqUrl);
    let date = new Date(qparams.iso);
    let result = null;
    if (reqUrl.pathname.indexOf('parsetime') >= 0){
	result = parseTime(date);
    }else if (reqUrl.pathname.indexOf('unixtime') >= 0){
	result = unixTime(date);
    }
    if (result){
    	response.writeHead(200, { 'Content-Type': 'application/json' });
    	response.end(JSON.stringify(result));
    }else{
	response.writeHead(404);
	response.end();
    }
});

server.listen(port);

