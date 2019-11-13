

// console.log(process.argv);
if (process.argv.length === 2){
//	console.log("At least one parameter is expected!");
	process.exit(1);
}
let params = process.argv.slice(2);
let sum = 0;
for (let i=0; i< params.length; i++){
   let x = parseInt(params[i]);
   if (x){
       sum += x;
   }
}

console.log(sum);


