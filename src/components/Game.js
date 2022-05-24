import React from 'react';
import Board from './Board';
import './Components.css';

function Game() {
    return (
        <div>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        </div>
    );
}

export default Game;