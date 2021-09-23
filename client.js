const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write('Name: Avi');
    conn.write('Say: I liked the game!');
    /*setTimeout(() => {
      conn.write("Move: up");
    }, 2000);
    setTimeout(() => {
      conn.write("Move: up");
    }, 6000);
    setTimeout(() => {
      conn.write("Move: up");
    }, 8000);
    setTimeout(() => {
      conn.write("Move: left");
    }, 10000);
     conn.write("Move: left");
     conn.write("Move: left");
     conn.write("Move: left");*/
  });

  return conn;
};
module.exports = {connect};