using System.Threading;
using System.Threading.Tasks;
using C3WebExt.FullService.CarrierOnboarding.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace C3WebExt.FullService.CarrierOnboarding.OrgUnits
{
    [Authorize]
    [ApiController]
    [Route("api/orgUnits")]
    public class GetOrgUnitsController : ControllerBase
    {
        private readonly ISelfServiceClient _client;

        public GetOrgUnitsController(ISelfServiceClient client)
        {
            _client = client;
        }

        public async Task<IActionResult> Get(CancellationToken cancellationToken)
        {
            var data = await _client.GetOrgUnits(cancellationToken);
            return Ok(data);
        }
    }
}
