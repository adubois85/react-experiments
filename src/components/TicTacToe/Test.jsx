import React, { useState } from 'react'
import Board from './Board'
import '../../stylesheets/TicTacToe.css'

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
}

export default function Test() {
    const [game, setGame] = useState({
        history: [Array(9).fill(null),
    ],
        stepNumber: 0,
        xIsNext: true,
        winner: null
    })

    function handleClick(i){
        let currentMove = game.history.slice(-1)[0]
        if (currentMove[i] || game.winner) {
            return
        }
        const history = game.history
        currentMove[i] = game.xIsNext ? 'X' : 'O'
        setGame(prevGame => ({
            history: [...history, currentMove],
            stepNumber: prevGame.stepNumber + 1,
            xIsNext: !prevGame.xIsNext,
            winner: calculateWinner(currentMove)
        }))
    }

    const gameStatus = (game.winner)
                        ? `Winner: ${game.winner}`
                        : `Next Player: ${game.xIsNext ? 'X' : 'O'}`

    // const moves = game.history.map(move => {
    //     const desc = (move)
    //                 ? `Go to move # ${move}`
    //                 : "Go to game start"
    //     return(
    //         <li key={move}>
    //             <button onClick={() => {
    //                 setGame(prevGame => ({
    //                     ...prevGame,
    //                     history: prevGame.history.slice(0, move)
    //                 }))
    //             }}>
    //                 {desc}
    //             </button>
    //         </li>
    //     )
    // })

    const moves = game.history.map((move, index) => {
            let description = (index == 0)
                                ? 'game start'
                                : `move #${index}`
            return (
                <li key={index}>
                    <button>
                        Go to {description}
                    </button>
                </li>
            );
        });
    
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={game.history[0]}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{gameStatus}</div>
            </div>
            <ol>
                {moves}
            </ol>
        </div>
    )
}