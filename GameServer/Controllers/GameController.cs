using Microsoft.AspNetCore.Mvc;

namespace GameServer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private static Game _game = new Game();

        [HttpPost("guess")]
        public ActionResult<string> MakeGuess([FromBody] int playerGuess)
        {
            string result = _game.CheckGuess(playerGuess);
            return Ok(result);
        }

        [HttpPost("new")]
        public ActionResult<string> NewGame()
        {
            _game = new Game();
            return Ok("New game started!");
        }
    }
}
