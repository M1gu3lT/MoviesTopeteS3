using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MT.Api.Model
{
  [Table("MTData")]
  public class MTData
  {
    [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    [Required]
    [MaxLength(100)]
    public string Username { get; set; } = null!;
    [Required]
    [MaxLength(64)]
    public byte[] PasswordHash { get; set; } = null!;
    public DateTime CreateDate { get; set; }

  }
}

