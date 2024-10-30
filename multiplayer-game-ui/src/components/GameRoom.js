import React, { useState, useEffect } from 'react';
import { makeGuess } from '../services/gameService';
import connectToSignalR from '../services/signalrService';

const GameRoom = ({ gameId }) => {
  const [guess, setGuess] = useState('');
  const [messages, setMessages] = useState(['Game Started!']);

  useEffect(() => {
    connectToSignalR((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleGuess = () => {
    makeGuess(guess)
      .then((response) => {
        setMessages((prevMessages) => [...prevMessages, response.data]);
      })
      .catch((error) => {
        console.error('Error making guess:', error);
        setMessages((prevMessages) => [...prevMessages, 'Error making guess']);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Game Room:</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="form-control"
          placeholder="Enter your guess"
        />
        <button className="btn btn-success" onClick={handleGuess}>
          Submit Guess
        </button>
      </div>
      <div>
        <h3>Messages:</h3>
        <ul className="list-group">
          {messages.map((msg, index) => (
            <li key={index} className="list-group-item">{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameRoom;
