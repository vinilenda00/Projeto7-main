import React from 'react';
import styled from 'styled-components';
import QRCodeSVG from '../QRCodeSVG'; // Importa o componente que cria o QR code com SVG

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 150px auto;
`;

const BigSquare = styled.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  background-color: #EFEFEF;  
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start; 
  border-radius: 20px;
  padding: 10px;
  padding-top: 80px;
  overflow-y: auto; 
  box-sizing: border-box;
`;

const SmallSquare = styled.div`
  width: calc(33.333% - 40px);
  height: auto;
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #efefef;
  border: 2px solid #ccc;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: calc(50% - 40px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 40px);
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  line-height: 1.5;
`;

const BoldFirstSentence = styled.span`
  font-weight: bold;
`;

const QRSection = () => {
  return (
    <PageContainer>
      <BigSquare>
        {/* Renderiza três quadrados com QR codes e informações */}
        <SmallSquare>
          <QRCodeSVG url="https://www.example.com/curso" size={150} /> {/* QR code com a URL do curso */}
          <TextContainer>
            <BoldFirstSentence><p>Palestra de Banco de Dados</p></BoldFirstSentence>
            <p>Data: XX/YY/ZZZZ</p>
            <p>Tempo: XX Horas</p>
            <p>Status: Não Iniciado</p>
            <p>Local: FECAP</p>
            <p>Formato: Remoto</p>
          </TextContainer>
        </SmallSquare>

        <SmallSquare>
          <QRCodeSVG url="https://www.example.com/data" size={150} /> {/* QR code com a URL dos dados */}
          <TextContainer>
            <BoldFirstSentence><p>Palestra de Banco de Dados</p></BoldFirstSentence>
            <p>Data: XX/YY/ZZZZ</p>
            <p>Tempo: XX Horas</p>
            <p>Status: Não Iniciado</p>
            <p>Local: FECAP</p>
            <p>Formato: Remoto</p>
          </TextContainer>
        </SmallSquare>

        <SmallSquare>
          <QRCodeSVG url="https://www.example.com/horario" size={150} /> {/* QR code com a URL do horário */}
          <TextContainer>
            <BoldFirstSentence><p>Palestra de Banco de Dados</p></BoldFirstSentence>
            <p>Data: XX/YY/ZZZZ</p>
            <p>Tempo: XX Horas</p>
            <p>Status: Não Iniciado</p>
            <p>Local: FECAP</p>
            <p>Formato: Remoto</p>
          </TextContainer>
        </SmallSquare>
      </BigSquare>
    </PageContainer>
  );
}

export default QRSection;
