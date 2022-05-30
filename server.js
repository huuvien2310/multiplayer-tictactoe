const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on('connection', socket => {
    console.log(`connect: ${socket.id}`);

    socket.on('hello!', () => {
        console.log(`hello from ${socket.id}`);
    });

    socket.on('disconnect', () => {
        console.log(`disconnect: ${socket.id}`);
    });
    socket.on('create or join', room => {
      console.log('Received request to create or join room', room);
      const myRoom = io.sockets.adapter.rooms[room];
      const numClients = myRoom ? myRoom.length : 0;
      if (numClients === 0) {
        socket.join(room);
        socket.emit('created', room);
      } else if (numClients === 1) {
        io.sockets.in(room).emit('join', room);
        socket.join(room);
        socket.emit('joined', room);
      } else {
        socket.emit('full', room);
      }
    });
});

httpServer.listen(3001, () => {
  console.log("Listening on port 3001");
});