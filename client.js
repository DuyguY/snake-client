const net = require("net");
const {IP, PORT} = require('./constants')
const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port:PORT 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name:   DY")
    console.log("Connected the server");
  }); 

  conn.on("data", (data) => {
    console.log(data);
  conn.on('end', () => {
      console.log('disconnected from server');
    });
   
  });
  

  return conn;
};
module.exports = {connect};

