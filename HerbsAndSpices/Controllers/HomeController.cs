using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HerbsAndSpices.Models;

namespace HerbsAndSpices.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var fileName = HttpContext.ApplicationInstance.Server.MapPath("~/App_Data") + "\\TextFile1.txt";
            using (StreamReader r = new StreamReader(fileName))
            {
                string json = r.ReadToEnd();

                return View(viewName: "Index", model: json);
            }
            

        }

    }
}