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
    <div>
      <h2>Game Room:</h2>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <div>
        <h3>Messages:</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameRoom;
