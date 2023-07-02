import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <NavLink to=".">Home</NavLink> |
                <NavLink to="tictactoe">TicTacToe</NavLink> | {" "}
                <NavLink to="a-maze-ing">A-Maze-ing</NavLink>
            </nav>
        </header>
    )
}