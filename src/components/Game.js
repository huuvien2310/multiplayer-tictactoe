import React from 'react';
import Board from './Board';
import './Components.css';
import io from "socket.io-client";
import { useParams } from 'react-router-dom';

const socket = io("localhost:3001");

function Game(props) {
    const {roomId} = useParams();
    const [isConnected, setIsConnected] = React.useState(socket.connected);

    React.useEffect(() => {
        socket.on("connect", () => {
            setIsConnected(true);
        });
        socket.on("disconnect", () => {
            setIsConnected(false);
        });
        socket.on("create or join", () => {
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("create or join");
        }
    }, [roomId]);

    return (
        <div>
            <div className="game">
                <div className="game-board">
                    <p>Player {'' + socket.id} connected</p>
                    <Board player={socket.id}/>
                </div>
            </div>
        </div>
    );
}

export default Game;