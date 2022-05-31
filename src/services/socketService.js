import io from "socket.io-client";
const socket = io("localhost:3001");

class SocketService {
    static getSocket(){
        return socket;
    }

    static getSocketId() {
        return socket.id;
    }

    static getSocketConnected() {
        return socket.connected;
    }

    static getSocketRooms() {
        return socket.rooms;
    }

    static updateBoard(newSquares, xIsNext, newGame, room) {
        socket.emit("update-board", {
            squares: newSquares,
            xIsNext: xIsNext,
            newGame: newGame,
        }, room);
    }

    static onUpdateBoard(listener) {
        socket.on("on-update-board", (newBoard) => listener(newBoard));
    }

    static offUpdateBoard() {
        socket.off("on-update-board");
    }
    
    static joinRoom(roomId) {
        console.log(roomId);
        socket.emit("join-room", roomId);
    }
}

export default SocketService;