var http = require("http");
const ws = require("ws");

const server = http.createServer();
const socket = new ws.Server({ server });
let clients = {};

socket.on("connection", wss => {
  wss.send("Welcome to chat!");
  console.log("We have new visitor");
  let id = Math.random();
  clients[id] = wss;

  console.log("New connection id: " + id);

  wss.on("message", msg => {
    for (let key in clients) {
      clients[key].send(id + ": " + msg.value);
    }
    wss.on("close", () => {
      console.log(id + ": LEAVE CHATROOM");
    });
  });
});
server.listen(3000, "127.0.0.1", function() {
  console.log("Сервер начал прослушивание запросов на порту 3000");
});
