using Microsoft.EntityFrameworkCore;

namespace ApiMT.Data
{
    public class MTAppDBContext : DbContext
    {
        public MTAppDBContext(DbContextOptions<MTAppDBContext> options) : base(options)
        {

        }

        public DbSet<Users> Users => Set<Users>();
        public DbSet<Movies> Movies => Set<Movies>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      
    }

    }
}
