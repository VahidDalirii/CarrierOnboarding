using System.Net.Http;
using System.Net.Http.Json;
using System.Threading;
using System.Threading.Tasks;

namespace C3WebExt.FullService.CarrierOnboarding.Services
{
    public class SelfServiceClient : ISelfServiceClient
    {
        private readonly HttpClient _client;

        public SelfServiceClient(HttpClient client)
        {
            _client = client;
            _client.DefaultRequestHeaders.Add("Accept", "application/vnd.centiro+json;version=v1");
        }

        public Task<object> GetOrgUnits(CancellationToken cancellationToken) =>
            _client.GetFromJsonAsync<object>("api/orgUnits", cancellationToken);
    }
}
