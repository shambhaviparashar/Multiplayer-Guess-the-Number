import React from 'react';
import { createNewGame } from '../services/gameService';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  const navigate = useNavigate();

  const handleCreateGame = () => {
    createNewGame()
      .then(response => {
        // Redirect to GameRoom with the gameId
        navigate(`/game/${response.data.gameId}`);
      })
      .catch(error => {
        console.error('Error creating game:', error);
      });
  };

  return (
    <div>
      <h2>Game Lobby</h2>
      <button onClick={handleCreateGame}>Create New Game</button>
    </div>
  );
};

export default Lobby;
