using System.Threading;
using System.Threading.Tasks;

namespace C3WebExt.FullService.CarrierOnboarding.Services
{
    public interface ISelfServiceClient
    {
        Task<object> GetOrgUnits(CancellationToken cancellationToken);
    }
}
