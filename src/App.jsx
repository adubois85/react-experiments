import React from 'react';
import { 
    createBrowserRouter,
    RouterProvider
    } from 'react-router-dom'
import Layout from './components/Layout'
import Game from './components/TicTacToe/Game'
import Maze from './components/A-Maze-ing/Maze'
import Home from './components/Home'

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


const router = createBrowserRouter([{
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />
        },
        {
            path: "tictactoe",
            element: <Game />
        },
        {
            path:"a-maze-ing",
            element: <Maze />
        }]
    },
])

export default function App() {
    return(
        <RouterProvider router={router} />
    );
}
