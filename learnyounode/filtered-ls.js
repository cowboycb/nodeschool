let path = require('path');
let fs = require('fs');


let dirName = process.argv[2];
let ext = "." + process.argv[3];
// console.log(dirName + ", " + ext);
if (dirName){

   fs.readdir(dirName, (err, files) => {
	// console.log("files, ", files);
	for (file of files){
	    // console.log(file);
	    if (path.extname(file) === ext){
		console.log(file);
	    }
	}
   });

}

