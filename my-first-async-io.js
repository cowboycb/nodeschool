let fs = require('fs');

let fileName = process.argv[2];
//console.info(fileName);
if (fileName){
	let count = 0;
	fs.readFile(fileName, 'utf8', (err, data) => {
		if (err) throw err;
		count = data.split('\n').length - 1;
		console.log(count);
	});

}
