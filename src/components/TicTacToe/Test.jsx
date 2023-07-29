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
    const [history, setHistory] = useState([{movesX:0, movesO:0}])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 == 0
    
    let winner
    if (calculateWinner(history[currentMove].movesX)) {
        winner = "Winner: X"
    }
    if (calculateWinner(history[currentMove].movesO)) {
        winner = "Winner: O"
    }

    let gameStatus
    if (winner) {
        gameStatus = winner
    } else {
        gameStatus = `Next Player: ${xIsNext ? 'X' : 'O'}`
    }

    function  createSquares(moves) {
        console.log(history[currentMove])
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

    /*
    This is broken and I don't know why.
    You can successfully roll back the game state by clicking on each button
    and it will correctly display the right Xs and Os.  But when you attempt
    to add a new move, it breaks spectacularly.  There seems to be some issue
    with the createSquares function.  When I uncomment the setHistory part, it
    breaks immediately when you click one of the history buttons.  I suspect it
    may relate to how react batches state changes, but really I don't know.  As
    it is, I've spent too much time on this already and I just need to move on.
    */
    const jumpTo = (e) =>{
        const move = e.target.getAttribute('id')
        winner = null
        setCurrentMove(move)
        // setHistory(() => 
        // [...history.slice(0, move)]
        // )
    }

    const currentBoard = createSquares(history[currentMove])

    function handleClick(i) {
        const current = history[currentMove]
        const filled = current.movesX + current.movesO
        if ((filled & 2 ** i) != 0 || winner) {
            return
        }
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
    }

    const movesList = history.map((move, index) => {
        let description = (index == 0)
                            ? 'game start'
                            : `move #${index}`
        return (
            <li key={index}>
                <button id={index} onClick={(i) => jumpTo(i)}>
                    Go to {description}
                </button>
            </li>
        )
    })
    
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={currentBoard}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
            <div>{gameStatus}</div>
                <ol>
                    {movesList}
                </ol>
            </div>
        </div>
    )
}