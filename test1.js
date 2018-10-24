var http = require("http");
var os = require("os");
var ws = require("ws");

let server = http.createServer();

const socket = new ws.Server({ server });

let clients = {};

socket.on("connection", wss => {
  wss.send("hi");
  wss.on("message", msg => {
    console.log("msg for u is: " + msg);
    wss.send("U send: " + msg);
  });
});

server.listen(3000, "127.0.0.1", function() {
  console.log("Сервер начал прослушивание запросов на порту 3000");
});

server.on("request", function(req, res) {
  res.end("dddddddddd");
});
