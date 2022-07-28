// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import Game from './components/TicTacToe/Game';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                 <Route path="/tictactoe" element={<Game />} />
            </Route>
        </Routes>
    </Router>
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//         {/* <Game /> */}
//     </React.StrictMode>,
//     document.getElementById('root')
// );
