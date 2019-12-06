const fs = require('fs');

const fileName = process.argv[2];

const stream = fs.createReadStream(fileName);
stream.pipe(process.stdout);

