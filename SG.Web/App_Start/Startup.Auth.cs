using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Protocols;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using Microsoft.Owin.Security.Notifications;

using Owin;

using System;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.Threading.Tasks;
using System.Web;
using System.IdentityModel.Claims;
using System.Globalization;
using SG.Web.Models;
using SG.Web.Utils;

namespace SG.Web
{
    public partial class Startup
    {
        public static string clientId = ConfigurationManager.AppSettings["idao:ClientId"];
        private static string appKey = ConfigurationManager.AppSettings["idao:ClientSecret"];
        public static string aadInstance = ConfigurationManager.AppSettings["idao:AADInstance"];

        // App config settings
        public static string ClientId = ConfigurationManager.AppSettings["ida:ClientId"];
        public static string ClientSecret = ConfigurationManager.AppSettings["ida:ClientSecret"];
        public static string AadInstance = ConfigurationManager.AppSettings["ida:AadInstance"];
        public static string Tenant = ConfigurationManager.AppSettings["ida:Tenant"];
        public static string RedirectUri = ConfigurationManager.AppSettings["ida:RedirectUri"];
        public static string ServiceUrl = ConfigurationManager.AppSettings["api:TaskServiceUrl"];

        // B2C policy identifiers
        public static string SignUpSignInPolicyId = ConfigurationManager.AppSettings["ida:SignUpSignInPolicyId"];
        public static string EditProfilePolicyId = ConfigurationManager.AppSettings["ida:EditProfilePolicyId"];
        public static string ResetPasswordPolicyId = ConfigurationManager.AppSettings["ida:ResetPasswordPolicyId"];

        public static string DefaultPolicy = SignUpSignInPolicyId;

        // API Scopes
        public static string ApiIdentifier = ConfigurationManager.AppSettings["api:ApiIdentifier"];
        public static string ReadTasksScope = ApiIdentifier + ConfigurationManager.AppSettings["api:ReadScope"];
        public static string WriteTasksScope = ApiIdentifier + ConfigurationManager.AppSettings["api:WriteScope"];
        public static string[] Scopes = new string[] { ReadTasksScope, WriteTasksScope };

        // OWIN auth middleware constants
        public const string ObjectIdElement = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

        // Authorities
        public static string Authority = String.Format(AadInstance, Tenant, DefaultPolicy);

        /*
        * Configure the OWIN middleware 
        */
        public void ConfigureAuth(IAppBuilder app)
        {
            app.SetDefaultSignInAsAuthenticationType(CookieAuthenticationDefaults.AuthenticationType);

            app.UseCookieAuthentication(new CookieAuthenticationOptions());

            var socialAuthenticationOptions = new OpenIdConnectAuthenticationOptions
            {
                // Generate the metadata address using the tenant and policy information
                MetadataAddress = String.Format(AadInstance, Tenant, DefaultPolicy),

                // These are standard OpenID Connect parameters, with values pulled from web.config
                ClientId = ClientId,
                RedirectUri = RedirectUri,
                PostLogoutRedirectUri = RedirectUri,

                // Specify the callbacks for each type of notifications
                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    RedirectToIdentityProvider = OnRedirectToIdentityProvider,
                    AuthorizationCodeReceived = OnAuthorizationCodeReceived,
                    AuthenticationFailed = OnAuthenticationFailed,
                },

                // Specify the claims to validate
                TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = "name"
                },

                // Specify the scope by appending all of the scopes requested into one string (separated by a blank space)
                Scope = $"openid profile offline_access {ReadTasksScope} {WriteTasksScope}"
            };

            app.Map("/SignUpSignInSocial", configuration =>
            {
                configuration.UseOpenIdConnectAuthentication(socialAuthenticationOptions);
            });

            var o365Authentication = new OpenIdConnectAuthenticationOptions
            {
                // The `Authority` represents the v2.0 endpoint - https://login.microsoftonline.com/common/v2.0
                // The `Scope` describes the initial permissions that your app will need.  See https://azure.microsoft.com/documentation/articles/active-directory-v2-scopes/                    
                ClientId = clientId,
                Authority = String.Format(CultureInfo.InvariantCulture, aadInstance, "common", "/v2.0"),
                RedirectUri = RedirectUri,
                Scope = "openid email profile offline_access Mail.Read",
                PostLogoutRedirectUri = RedirectUri,

                // Specify the claims to validate
                TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    NameClaimType = "name"
                },

                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    // If there is a code in the OpenID Connect response, redeem it for an access token and refresh token, and store those away.
                    AuthorizationCodeReceived = OnAuthorizationCodeReceived,
                    AuthenticationFailed = OnAuthenticationFailed
                }
            };

            app.Map("/Account/SignUpSignInO365", configuration =>
            {
                configuration.UseOAuth2CodeRedeemer(new OAuth2CodeRedeemerOptions
                {
                    ClientId = clientId,
                    ClientSecret = appKey,
                    RedirectUri = RedirectUri
                });
                configuration.UseOpenIdConnectAuthentication(o365Authentication);
            });
        }

        /*
         *  On each call to Azure AD B2C, check if a policy (e.g. the profile edit or password reset policy) has been specified in the OWIN context.
         *  If so, use that policy when making the call. Also, don't request a code (since it won't be needed).
         */
        private Task OnRedirectToIdentityProvider(RedirectToIdentityProviderNotification<OpenIdConnectMessage, OpenIdConnectAuthenticationOptions> notification)
        {
            var policy = notification.OwinContext.Get<string>("Policy");

            if (!string.IsNullOrEmpty(policy) && !policy.Equals(DefaultPolicy))
            {
                notification.ProtocolMessage.Scope = OpenIdConnectScopes.OpenId;
                notification.ProtocolMessage.ResponseType = OpenIdConnectResponseTypes.IdToken;
                notification.ProtocolMessage.IssuerAddress = notification.ProtocolMessage.IssuerAddress.ToLower().Replace(DefaultPolicy.ToLower(), policy.ToLower());
            }

            return Task.FromResult(0);
        }

        /*
         * Catch any failures received by the authentication middleware and handle appropriately
         */
        private Task OnAuthenticationFailed(AuthenticationFailedNotification<OpenIdConnectMessage, OpenIdConnectAuthenticationOptions> notification)
        {
            notification.HandleResponse();

            // Handle the error code that Azure AD B2C throws when trying to reset a password from the login page 
            // because password reset is not supported by a "sign-up or sign-in policy"
            if (notification.ProtocolMessage.ErrorDescription != null && notification.ProtocolMessage.ErrorDescription.Contains("AADB2C90118"))
            {
                // If the user clicked the reset password link, redirect to the reset password route
                notification.Response.Redirect("/Account/ResetPassword");
            }
            else if (notification.Exception.Message == "access_denied")
            {
                notification.Response.Redirect("/");
            }
            else
            {
                notification.Response.Redirect("/Home/Error?message=" + notification.Exception.Message);
            }

            return Task.FromResult(0);
        }


        /*
         * Callback function when an authorization code is received 
         */
        private async Task OnAuthorizationCodeReceived(AuthorizationCodeReceivedNotification notification)
        {
            // Extract the code from the response notification
            var code = notification.Code;

            string signedInUserID = notification.AuthenticationTicket.Identity.FindFirst(ClaimTypes.NameIdentifier).Value;
            TokenCache userTokenCache = new MSALSessionCache(signedInUserID, notification.OwinContext.Environment["System.Web.HttpContextBase"] as HttpContextBase).GetMsalCacheInstance();
            ConfidentialClientApplication cca = new ConfidentialClientApplication(ClientId, Authority, RedirectUri, new ClientCredential(ClientSecret), userTokenCache, null);
            try
            {
                AuthenticationResult result = await cca.AcquireTokenByAuthorizationCodeAsync(code, Scopes);
            }
            catch (Exception ex)
            {
                //TODO: Handle
                throw;
            }
        }

    }
}
