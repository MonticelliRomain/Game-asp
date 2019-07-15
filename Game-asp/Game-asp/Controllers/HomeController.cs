using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Game_asp.Models;

namespace Game_asp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            CharacterManager.Instance.Register<Magician>("magician");
            CharacterManager.Instance.Register<Warrior>("warrior");
            CharacterManager.Instance.Register<Elf>("elf");
            return View(GameManager.Instance.AddGame(new Game(2)));
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}