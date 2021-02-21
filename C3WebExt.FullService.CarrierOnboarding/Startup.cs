using System;
using Centiro.C3WebExtension.Extensions;
using C3WebExt.FullService.CarrierOnboarding.Handlers;
using C3WebExt.FullService.CarrierOnboarding.HealthChecks;
using C3WebExt.FullService.CarrierOnboarding.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace C3WebExt.FullService.CarrierOnboarding
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => { options.EnableEndpointRouting = false; })
                .AddC3WebMenu(services);

            services.AddCentiroDefaultForwardedHeaders();
            services.AddCentiroAuthentication(options =>
                ConfigurationBinder.Bind(_configuration.GetSection("IdentityServer"), options));
            services.AddCentiroDataProtect(options =>
                ConfigurationBinder.Bind(_configuration.GetSection("DataProtect"), options));
            services.AddKubernetesHealthChecks<ReadyHealthCheck, LiveHealthCheck>();

            services.AddScoped<AccessTokenHandler>();
            services.AddHttpClient<ISelfServiceClient, SelfServiceClient>(client =>
            {
                client.BaseAddress = new Uri(_configuration.GetValue<string>("SelfService:BaseAddress"));
            }).AddHttpMessageHandler<AccessTokenHandler>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCentiroPathBase();
            app.UseForwardedHeaders();

            app.UseStaticFiles();

            app.UseKubernetesHealthChecks();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Main}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
