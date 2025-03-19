import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <Router>
      <div>
        <h1>React SPA - Webprogramozás Beadandó</h1>
        <nav>
          <ul>
            <li><Link to="/">Számológép</Link></li>
            <li><Link to="/tictactoe">Tic-Tac-Toe</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
