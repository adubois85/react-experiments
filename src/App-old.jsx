// import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import Home from './components/Home'
import Game from './components/TicTacToe/Game'

// function App() {
//     return (
//         <div style={{ textAlign: 'center' }}>
//             <header>
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

function App() {
    return(
        <>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="/tictactoe">TicTacToe</Link> | {" "}
                <Link to="/">Home</Link>
            </nav>
            <Outlet />
        </>
    );
}

export default App;
