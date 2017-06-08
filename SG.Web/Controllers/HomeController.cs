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

        //[Route("SignUpSignInSocial")]
        ///*
        //*  Called when requesting to sign up or sign in
        //*/
        //public void SignUpSignInSocial()
        //{
        //    // Use the default policy to process the sign up / sign in flow
        //    if (!Request.IsAuthenticated)
        //    {
        //        HttpContext.GetOwinContext().Authentication.Challenge();
        //        return;
        //    }

        //    Response.Redirect("/");
        //}

        ///*
        // *  Called when requesting to sign up or sign in
        // */
        //[Route("SignUpSignInO365")]
        //public void SignUpSignInO365()
        //{
        //    // Send an OpenID Connect sign-in request.
        //    if (!Request.IsAuthenticated)
        //    {
        //        HttpContext.GetOwinContext().Authentication.Challenge();
        //        return;
        //    }

        //    Response.Redirect("/");
        //}

        ///*
        //*  Called when requesting to sign out
        //*/
        //[Route("SignOut")]
        //public void SignOut()
        //{
        //    // To sign out the user, you should issue an OpenIDConnect sign out request.
        //    if (Request.IsAuthenticated)
        //    {
        //        IEnumerable<AuthenticationDescription> authTypes = HttpContext.GetOwinContext().Authentication.GetAuthenticationTypes();
        //        HttpContext.GetOwinContext().Authentication.SignOut(authTypes.Select(t => t.AuthenticationType).ToArray());
        //        Request.GetOwinContext().Authentication.GetAuthenticationTypes();
        //    }
        //}
    }
}