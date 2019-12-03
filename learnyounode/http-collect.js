const http = require('http');

let url = process.argv[2];

if (url){

	http.get(url, (resp) => {
	    const { statusCode } = resp; // getting statusCode from response
	    if (statusCode == 200){
		resp.setEncoding('utf8');
  		let rawData = '';
  		resp.on('data', (chunk) => { rawData += chunk; });
  		resp.on('end', () => {
    		    try {
      		    	console.log(rawData.length);
      		    	console.log(rawData);
    		    } catch (e) {
      		    	console.error(e.message);
    		    }
  		});
	    }
	}).on('error', (e) => {
	    console.error(`Got error ${e.message}`);
	});

}

