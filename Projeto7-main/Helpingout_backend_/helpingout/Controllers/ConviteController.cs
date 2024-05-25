using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QRCoder; // Adicione esta diretiva



using helpingout.Models;

public class QrCodeGenerator
{
    public string GenerateQrCode(int userId)
    {
        using (QRCodeGenerator qrGenerator = new QRCodeGenerator())
        {
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(userId.ToString(), QRCodeGenerator.ECCLevel.Q);
            using (SvgQRCode qrCode = new SvgQRCode(qrCodeData))
            {
                string svgQrCode = qrCode.GetGraphic(20);
                return "data:image/svg+xml;base64," + Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(svgQrCode));
            }
        }
    }

    // Novo método que gera QR Code com informações adicionais
    public string GenerateQrCode(int userId, string userName, string eventInfo)
    {
        // Concatenate user information and event information into one string
        string qrContent = $"User ID: {userId}\nUser Name: {userName}\nEvent Info: {eventInfo}";

        using (QRCodeGenerator qrGenerator = new QRCodeGenerator())
        {
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(qrContent, QRCodeGenerator.ECCLevel.Q);
            using (SvgQRCode qrCode = new SvgQRCode(qrCodeData))
            {
                string svgQrCode = qrCode.GetGraphic(20);
                return "data:image/svg+xml;base64," + Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(svgQrCode));
            }
        }
    }




}

[ApiController]
[Route("api/[controller]")]
public class ConviteController : ControllerBase
{
    private readonly IUsuarioService _usuarioService;

    public ConviteController(IUsuarioService usuarioService)
    {
        _usuarioService = usuarioService;
    }

    // Método para gerar convite com informações adicionais
    [HttpGet("detailed/{userId}")]
    public async Task<IActionResult> GetDetailedConvite(int userId)
    {
        try
        {
            var user = await _usuarioService.ObterUsuarioPorIdAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            string eventInfo = "O usuário teve acesso ao evento :D"; 

            var convite = new Convite
            {
                id_convites = BitConverter.ToInt32(Guid.NewGuid().ToByteArray(), 0),
                statusCheckin = "Not Checked In",
                statusCheckout = "Not Checked Out",
                tema = "Default",
                formato = "Digital",
                local = "To be defined",
                data = DateTime.Now,
                id_evento = BitConverter.ToInt32(Guid.NewGuid().ToByteArray(), 0),
                id_usuario = userId,
                qrcode = new QrCodeGenerator().GenerateQrCode(userId, user.Nome, eventInfo)
            };

            return Ok(convite);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Erro ao processar a solicitação: {ex.Message}");
        }
    }

    // Método para gerar convite com apenas o userId
    [HttpGet("{userId}")]
    public async Task<IActionResult> GetConvite(int userId)
    {
        try
        {
            var user = await _usuarioService.ObterUsuarioPorIdAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            var convite = new Convite
            {
                id_convites = BitConverter.ToInt32(Guid.NewGuid().ToByteArray(), 0),
                statusCheckin = "Not Checked In",
                statusCheckout = "Not Checked Out",
                tema = "Default",
                formato = "Digital",
                local = "To be defined",
                data = DateTime.Now,
                id_evento = BitConverter.ToInt32(Guid.NewGuid().ToByteArray(), 0),
                id_usuario = userId,
                qrcode = new QrCodeGenerator().GenerateQrCode(userId)
            };

            return Ok(convite);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Erro ao processar a solicitação: {ex.Message}");
        }
    }

    [HttpPost("checkin")]
    public async Task<IActionResult> CheckInUser([FromBody] CheckInRequest request)
    {
        try
        {
            var user = await _usuarioService.ObterUsuarioPorIdAsync(request.IdUsuario);
            if (user == null)
            {
                return NotFound();
            }

            // Lógica para fazer o check-in do usuário e adicionar à lista de nomes
            var checkInList = new List<string>(); // Isso deve ser armazenado em algum lugar persistente
            checkInList.Add(user.Nome); // Acessando o nome do usuário

            return Ok(checkInList);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Erro ao processar a solicitação: {ex.Message}");
        }
    }
}
