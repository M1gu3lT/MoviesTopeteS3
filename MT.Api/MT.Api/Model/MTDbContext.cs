using Microsoft.EntityFrameworkCore;

namespace MT.Api.Model
{
  public class MTDbContext:DbContext
  {
    public MTDbContext(DbContextOptions<MTDbContext> options) : base(options)
    {
    }

    public DbSet<MTData> MTData { get; set; }

  }
}
