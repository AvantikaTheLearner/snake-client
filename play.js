const {connect} = require("./client.js");

// establishes a connection with the game server
console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    }
    process.stdout.write('.');
  });
  return stdin;
};

setupInput();