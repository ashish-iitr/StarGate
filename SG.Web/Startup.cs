using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web;

[assembly: OwinStartup(typeof(SG.Web.Startup))]

namespace SG.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            //ConfigureAuthO365(app);
        }
    }
}
