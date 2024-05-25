using helpingout.Controllers;
using helpingout.Data;
using helpingout.Interfaces;
using helpingout.Repositories; // Certifique-se de ter a implementa��o do reposit�rio
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase("ServidorDB"));

// Adiciona o reposit�rio de usu�rio
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>(); // Certifique-se de ter a implementa��o do reposit�rio
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
