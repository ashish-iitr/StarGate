using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SG.Web.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("NgApp");
        }

        [Route("SignUpSignInSocial")]
        public void SignUpSignInSocial()
        {
            // Use the default policy to process the sign up / sign in flow
            if (!Request.IsAuthenticated)
            {
                HttpContext.GetOwinContext().Authentication.Challenge();
                return;
            }

            Response.Redirect("/");
        }

        //public ActionResult Error(string message)
        //{
        //    ViewBag.Message = message;

        //    return View("Error");
        //}
    }
}