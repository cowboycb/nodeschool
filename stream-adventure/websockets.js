var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.write(Buffer.from('hello\n'));
