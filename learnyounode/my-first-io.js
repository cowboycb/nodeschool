let fs = require('fs');

let fileName = process.argv[2];
//console.info(fileName);
if (fileName){
	let content = fs.readFileSync(fileName);
	let lines = content.toString().split('\n');

	console.log(lines.length-1);

}
