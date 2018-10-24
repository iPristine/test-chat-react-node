const socket = new WebSocket("ws:127.0.0.1:3000/");

document.forms.post.onsubmit = function() {
  let outgoingMessage = this.message;

  socket.send(outgoingMessage);
  return false;
};

socket.onmessage = e => {
  let incommingMessage = e.data;
  console.log("New msg: ", incommingMessage);
  showMessage(incommingMessage);
};

function showMessage(message) {
  let messageElem = document.createElement("div");
  messageElem.appendChild(document.createTextNode(message));
  document.getElementById("chatarea").appendChild(messageElem);
}
