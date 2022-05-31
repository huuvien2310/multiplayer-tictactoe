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

const getSocketGameRoom = socket => {
    const socketRooms = Array.from(socket.rooms.values()).filter(
      (r) => r !== socket.id
    );
    const gameRoom = socketRooms && socketRooms[0];

    return gameRoom;
}

io.on('connection', socket => {
    console.log(`connect: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`disconnect: ${socket.id}`);
    });
    socket.on('join-room', room => {
        socket.join(room);
        io.emit('on-join-room', room);
        // console.log(getSocketGameRoom(socket));
    });
    // socket.on('in-room', roomId => {
    //     // console.log(socket.rooms)
    // });
    socket.on('update-board', (board, roomId) => {
        const room = getSocketGameRoom(socket);
        io.in(room).emit('on-update-board', board);
    });
});

httpServer.listen(3001, () => {
  console.log("Listening on port 3001");
});