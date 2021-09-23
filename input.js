// setup interface to handle user input from stdin
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // connection.on("connect", () => {
  //   connection.write('Say: I liked the game!');
  // });
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    }
    if (handleUserInput === 'w') {
      connection.write("Move: up");
    } else if (handleUserInput === 'a') {
      connection.write("Move: left");
    } else if (handleUserInput === 's') {
      connection.write("Move: down");
    } else if (handleUserInput === 'd') {
      connection.write("Move: right");
    }
    process.stdout.write('.');
  });
  return stdin;
};

module.exports = {setupInput};