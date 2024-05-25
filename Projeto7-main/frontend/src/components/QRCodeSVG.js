import React from 'react';
import QRCode from 'qrcode-svg'; // Importe a biblioteca qrcode-svg

const QRCodeSVG = ({ url, size }) => {
  // Função para criar o SVG do QR Code
  const createQRCodeSVG = (url, size) => {
    // Cria uma nova instância do QRCode
    const qr = new QRCode({
      content: url,
      width: size,
      height: size,
    });

    // Obtém o SVG do QRCode
    const qrSVG = qr.svg();

    // Retorna o SVG como uma string
    return qrSVG;
  };

  return (
    // Renderiza o SVG do QR Code usando a string SVG gerada
    <div dangerouslySetInnerHTML={{ __html: createQRCodeSVG(url, size) }} />
  );
};

export default QRCodeSVG;