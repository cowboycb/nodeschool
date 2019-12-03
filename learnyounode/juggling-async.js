const http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

if (url1 && url2 && url3){
let contents = [];
	http.get(url1, (resp) => {
		contents.push(resp);
		http.get(url2, (resp2) => {
			contents.push(resp2);
			http.get(url3, (resp3) => {
				contents.push(resp3);
				contents.forEach(printContent);
			});
		});
	}).on('error', (e) => {
	    console.error(`Got error ${e.message}`);
	});

}

function printContent(resp){
	const { statusCode } = resp; // getting statusCode from response
	if (statusCode == 200){
		resp.setEncoding('utf8');
  		let rawData = '';
  		resp.on('data', (chunk) => { rawData += chunk; });
  		resp.on('end', () => {
    		try {
      			console.log(rawData);
    		} catch (e) {
      	    		console.error(e.message);
    		}
  		});
	}
}

