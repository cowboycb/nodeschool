const spawn = require('child_process').spawn;
//const { spawn } = require('child_process'); // same as above
const duplexer = require('duplexer2');

module.exports = function (cmd, args) {
// spawn the process and return a single stream
// joining together the stdin and stdout here

const subprocess = spawn(cmd, args);

return duplexer(subprocess.stdin, subprocess.stdout);
};
