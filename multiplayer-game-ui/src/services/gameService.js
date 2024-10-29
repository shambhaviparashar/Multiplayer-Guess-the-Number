import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const createNewGame = () => {
  return axios.post(`${API_URL}/api/Game/new`);
};

export const makeGuess = (guess) => {
  return axios.post(`${API_URL}/api/Game/guess`, JSON.stringify(guess), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};