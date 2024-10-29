import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './components/Lobby';
import GameRoom from './components/GameRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game/:id" element={<GameRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
