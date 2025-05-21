public class Users //nombre de la tabla de la base de datos
{
    public int id { get; set; }
    public string Username { get; set; } = null!;
    public byte[] PasswordHash { get; set; } = null!;
    public DateTime CreateDate { get; set; }

    //encapsulamiento
    //Getter y Setter

}