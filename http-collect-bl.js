const http = require('http');
const bl = require('bl');

let url = process.argv[2];

if (url){

	http.get(url, (resp) => {
	    const { statusCode } = resp; // getting statusCode from response
	    if (statusCode == 200){
		resp.pipe(bl((err, data) => {
		   if (err){
			console.error("HATA: ", err);
	 	   }else{
			console.log(data.toString().length);
			console.log(data.toString());
		   }
		}));
	    }
	}).on('error', (e) => {
	    console.error(`Got error ${e.message}`);
	});

}

