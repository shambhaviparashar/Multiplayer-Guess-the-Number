using System;

namespace GameServer
{
    public class Game
    {
        private int _secretNumber;
        private bool _gameOver;

        public Game()
        {
            // Generate a random secret number between 1 and 100
            Random random = new Random();
            _secretNumber = random.Next(1, 101);
            _gameOver = false;
        }

        public string CheckGuess(int playerGuess)
        {
            if (_gameOver)
            {
                return "Game is over. Start a new game!";
            }

            if (playerGuess < _secretNumber)
            {
                return "Too low!";
            }
            else if (playerGuess > _secretNumber)
            {
                return "Too high!";
            }
            else
            {
                _gameOver = true;
                return "Correct! You've won the game!";
            }
        }
    }
}
