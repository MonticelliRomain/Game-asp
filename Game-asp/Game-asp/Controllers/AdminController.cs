using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Game_asp;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gameasp.Controllers
{


    [Route("api/[controller]/[action]")]
    public class AdminController : Controller
    {

        [HttpPost("{id}/{nbPlayers}/{playerNumber}/{character}")] 
        public IActionResult Post(int id, int nbPlayers, int playerNumber, string character)
        {
            int team = 0;
            if (playerNumber > (nbPlayers / 2))
                team = 1;

            Character hero = (Character)Activator.CreateInstance(CharacterManager.Instance.GetMap()[character]);

            GameManager.Instance.GetGames()[id].GetTeams()[team].GetPlayers().Add(new Player(hero, playerNumber));
            return View("~/Views/Home/Index.cshtml");
        }

        [HttpPost("{character}")] //Matches POST api/admin/elf
        public IActionResult Post(string character)
        {

            return View("Index");
        }

        //...other code removed for brevity
    }
}
