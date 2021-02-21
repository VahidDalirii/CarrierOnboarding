using System.Threading.Tasks;
using Centiro.C3WebExtension;

namespace C3WebExt.FullService.CarrierOnboarding
{
    public static class Program
    {
        public static async Task<int> Main(string[] args)
        {
            var app = new CentiroApplicationRunner(args);
            return await app.RunAsync<Startup>();
        }
    }
}
