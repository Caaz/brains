const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// import game stuff here

app.get('/', (req, res) => {
  // I'd expect you to serve the game here
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // Handle new players here
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
