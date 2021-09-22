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
    conn.write('Name: Avi');
  });

  return conn;
};
module.exports = {connect};