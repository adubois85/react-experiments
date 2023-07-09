import React, { useState } from 'react'
import Board from './Board'
import '../../stylesheets/TicTacToe.css'

function calculateWinner(squares) {
    /* 
    a bitboard representation of the winning moves
    ┌────────────────┐
    │  1 │   2 │   4 │ 
    ├────┼─────┼─────┤
    │  8 │  16 │  32 │
    ├────┼─────┼─────┤
    │ 64 │ 128 │ 256 │
    └────────────────┘
    add up each row/column/diagonal to get a sum of winning squares
    */
    const wins = [7, 56, 448, 73, 146, 292, 84, 273]
    for (let i = 0; i < wins.length; i++) {
        // use each winning sum as a bitmask, then see if any of the results are equal;
        // if so, then you must have filled in those squares, thus winning
        let temp = squares & wins[i]
        if (temp == wins[i]){
            return true
        }
    }
    return false
}

export default function Test() {
    // const [history, setHistory] = useState([{movesX: 0, movesO: 0}])
    const [history, setHistory] = useState([{movesX:0, movesO:0}])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 == 0
    let winner

    function  createSquares(moves) {
        let squares = Array(9).fill(null)
        for (let i = 0; i < 9; i++) {
            if ((moves.movesX >> i) & 1) {
                squares[i] = 'X'
            } else if ((moves.movesO >> i) & 1) {
                squares[i] = 'O'
            } else {
                squares[i] = null
            }
        }
        return squares
    }

    const currentBoard = createSquares(history[currentMove])

    function handleClick(i) {
        if (winner) {
            return
        }
        const current = history[currentMove]
        let next
        if (xIsNext) {
            next = {
                movesX: current.movesX + 2 ** i,
                movesO: current.movesO
            }
        } else {
            next = {
                movesX: current.movesX,
                movesO: current.movesO + 2 ** i
            }
        }
        setCurrentMove(prev => prev + 1)
        setHistory([...history, next])
        if (calculateWinner(history[currentMove].movesX)) {
            winner = "Winner: X"
        }
        if (calculateWinner(history[currentMove].movesO)) {
            winner = "Winner: O"
        }
    }

    // const gameStatus = (game.winner)
    //                     ? `Winner: ${game.winner}`
    //                     : `Next Player: ${game.xIsNext ? 'X' : 'O'}`

    // const moves = game.history.map((move, index) => {
    //         let description = (index == 0)
    //                             ? 'game start'
    //                             : `move #${index}`
    //         return (
    //             <li key={index}>
    //                 <button onClick={() => jumpTo(index)}>
    //                     Go to {description}
    //                 </button>
    //             </li>
    //         );
    //     });

// {/* <div className="game-info">
//     <div>{gameStatus}</div>
// </div> */}
//     <ol>
//     {moves}
// </ol>
    
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={currentBoard}
                    onClick={(i) => handleClick(i)}
                />
            </div>

        </div>
    )
}