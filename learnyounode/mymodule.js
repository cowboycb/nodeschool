let fs = require('fs');
let path = require('path');

let exportFn = function printFileListFromDir(dirName, extName, callback){

	extName = "." + extName;
	fs.readdir(dirName, (err, files) => {
	   if (err) return callback(err, null); 
	   
	   let wantedFiles = [];
	   for (file of files){
               if (path.extname(file) === extName){
                  wantedFiles.push(file);
               }
           }
	   
           callback(null, wantedFiles);
	});
	

}

module.exports = exportFn;
