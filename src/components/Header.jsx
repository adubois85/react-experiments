import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="tictactoe">TicTacToe</Link> | {" "}
                <Link to="home">Home</Link>
            </nav>
        </header>
    )
}