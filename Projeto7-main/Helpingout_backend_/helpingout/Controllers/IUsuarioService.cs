using helpingout.Models;

public interface IUsuarioService
{
    Task<Usuario> ObterUsuarioPorIdAsync(int userId);
}
