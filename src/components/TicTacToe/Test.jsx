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
    wins.forEach(win => {
        // use each winning sum as a bitmask, then see if any of the results are equal;
        // if so, then you must have filled in those squares, thus winning
        let temp = squares & win
        if (temp == win){
            console.log("You win")
        }
    })
}

export default function Test() {
    const [history, setHistory] = useState({movesX: 0, movesO: 0})
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

    // let temp = 412 // 001110011
    // let temp2 = []
    // for (let i = 0; i < 9; i++) {
    //     temp2[i] = (temp >> i) & 1
    // }
    // console.log(temp2)

    // console.log(calculateWinner(8))
    // let temp = [7, 56, 448, 73, 146, 292, 84, 273]
    // let score = 401
    // console.log([score | 7, score | 56, score | 448],
    //             [score | 73, score | 146, score | 292],
    //             [score | 84, score | 273])

    // console.log([score & 7, score & 56, score & 448],
    //             [score & 73, score & 146, score & 292],
    //             [score & 84, score & 273])

    // console.log([score ^ 7, score ^ 56, score ^ 448],
    //             [score ^ 73, score ^ 146, score ^ 292],
    //             [score ^ 84, score ^ 273])

    // console.log(calculateWinner(146))
    calculateWinner(137)

    const dummyBoard = Array(9).fill(null)
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

{/* <div className="game-info">
    <div>{gameStatus}</div>
</div> */}
//     <ol>
//     {moves}
// </ol>
    
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={dummyBoard}
                    onClick={(i) => handleClick(i)}
                />
            </div>

        </div>
    )
}