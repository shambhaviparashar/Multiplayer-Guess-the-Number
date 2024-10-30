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
    <div className="container mt-5">
      <h2 className="mb-4">Game Lobby</h2>
      <button className="btn btn-primary btn-lg" onClick={handleCreateGame}>
        Create New Game
      </button>
    </div>
  );
};

export default Lobby;
