using helpingout.Data;
using helpingout.Models;

public class UsuarioService: IUsuarioService
{
    private readonly ApiContext _context;

    public UsuarioService(ApiContext context)
    {
        _context = context;
    }

    public async Task<Usuario> ObterUsuarioPorIdAsync(int userId)
    {
        return await _context.Usuarios.FindAsync(userId);
    }
}
