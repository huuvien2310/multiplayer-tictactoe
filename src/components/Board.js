import React from 'react';
import Square from './Square';

function Board(props) { 
    const [board, setBoard] = React.useState({
        squares: Array(9).fill(null),
        xIsNext: true,
    });

    const handleClick = (i) => {
        const squares = board.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = board.xIsNext ? 'X' : 'O';
        setBoard({
            squares: squares,
            xIsNext: !board.xIsNext,
        });
    };
    
    const renderSquare = (i) => {
        return (
            <Square
                value={board.squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    };

    const winner = calculateWinner(board.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (board.xIsNext ? 'X' : 'O');
    }
    
    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

function calculateWinner(square) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}

export default Board;