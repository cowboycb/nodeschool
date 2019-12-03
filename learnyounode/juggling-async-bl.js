const http = require('http');
const bl = require('bl');

let params = process.argv;
let contents = [];
let count = 0; // if last url response gets first then contents array length can be 3 so array length checking can be invalid, count should be used

for (let i=0; i<3; i++){
    http.get(params[2+i], (resp) => {
	resp.pipe(bl( (err, data) => {
	    contents[i] = data.toString();
	    count++;
	    if (count === 3){
		printContents();
		return;
	    }
	}));
    });
}

function printContents(){
    for(let i=0; i<contents.length; i++){
	console.log(contents[i]);
    }
}

