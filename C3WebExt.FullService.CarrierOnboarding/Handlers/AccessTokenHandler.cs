using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Centiro.C3WebExtension.Services;

namespace C3WebExt.FullService.CarrierOnboarding.Handlers
{
    public class AccessTokenHandler : DelegatingHandler
    {
        private readonly IAccessTokenProvider _accessTokenProvider;

        public AccessTokenHandler(IAccessTokenProvider accessTokenProvider)
        {
            _accessTokenProvider = accessTokenProvider;
        }

        protected override Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage requestMessage,
            CancellationToken cancellationToken)
        {
            requestMessage.Headers.Add("Authorization", $"Bearer {_accessTokenProvider.AccessToken}");
            return base.SendAsync(requestMessage, cancellationToken);
        }
    }
}
