using Microsoft.AspNetCore.Mvc;

namespace Game_asp.Controllers
{
    public class FightController : Controller
    {
        public IActionResult Fight()
        {
            return View();
        }
    }
}
