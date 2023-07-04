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
    lines.forEach(line => {
        const [a, b, c] = line
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    })
}

export default function Test() {
    const [game, setGame] = useState({
        history: [
            Array(9).fill(null)
        ],
        stepNumber: 0,
        xIsNext: true
    })

    // console.log(game)
    // console.log(game.history.squares)
    // console.log(calculateWinner(['x']))

    function handleClick(i){
        const history = game.history
        console.log(history)
        // setGame(prevGame => ({

        // }))
    }

    // <div>{status}</div>
    // <ol>{moves}</ol>

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={game.history}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">

            </div>
        </div>
    )
}