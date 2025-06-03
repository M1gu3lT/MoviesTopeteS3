using Microsoft.EntityFrameworkCore;
using MT.Api.Model;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<MTDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("testCon")));

builder.Services.AddCors();
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: "allowCors",
      builder =>
      {
        builder.WithOrigins("https://localhost:4200", "http://localhost:4200")
          .AllowCredentials()
          .AllowAnyHeader()
          .AllowAnyMethod();
      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("allowCors");

app.MapControllers();

app.Run();
