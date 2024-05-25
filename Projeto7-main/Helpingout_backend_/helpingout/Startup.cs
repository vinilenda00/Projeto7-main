using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using helpingout.Data;

namespace helpingout
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // Este método é chamado em tempo de execução. Use este método para adicionar serviços ao contêiner.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // Configuração do DbContext
            services.AddDbContext<ApiContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            // Registro dos serviços necessários
            services.AddScoped<IUsuarioService, UsuarioService>();

            // Outros serviços podem ser adicionados aqui...

        }

        // Este método é chamado em tempo de execução. Use este método para configurar o pipeline de solicitação HTTP.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // Em produção, qualquer exceção não tratada será redirecionada para a página de erro.
                app.UseExceptionHandler("/Error");
                // O usuário será redirecionado para esta página se tentar acessar uma página que não tem autorização.
                app.UseStatusCodePagesWithReExecute("/Error/{0}");
            }

            // Configuração do pipeline de roteamento
            app.UseRouting();

            // Habilitar o middleware de endpoint do ASP.NET Core
            app.UseEndpoints(endpoints =>
            {
                // Mapeamento dos endpoints dos controladores
                endpoints.MapControllers();
            });
        }
    }
}
