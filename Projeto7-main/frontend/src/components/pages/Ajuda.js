import React from 'react';
import styled from 'styled-components';

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 100px auto;
`;

const BigSquare = styled.div`
  width: 70vw;
  height: 70vh;
  background: linear-gradient(90deg, #0FAA75 0%, #00693C 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SmallSquareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1000px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const SmallSquare = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(33.33% - 20px); 
  max-width: 300px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: calc(100% - 20px); 
  }
`;

const SmallSquareText = styled.div`
  text-align: center;
  margin-top: 5px;
  line-height: 2.5;
  color: #000;
  font-size: 18px;
`;

const BigSquareText = styled.h2`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 1;
  font-size: min(6vw, 40px); 
`;

export default function Profile() {
  return (
    <ProfilePage>
      <MainContent>
        <BigSquare>
          <BigSquareText>Como podemos te ajudar?</BigSquareText>
          <SmallSquareContainer>
            <SmallSquare>
              <SmallSquareText>
                <h3>Local:</h3>
                <p>Avenida da Liberdade, 532</p>
                <p>São Paulo - SP</p>
              </SmallSquareText>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
               <h3>Telefone:</h3>
                <p>40028922</p>
              </SmallSquareText>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Email:</h3>
                <p>fecapAlunos@hotmail.com</p>
              </SmallSquareText>
            </SmallSquare>
          </SmallSquareContainer>
        </BigSquare>
      </MainContent>
    </ProfilePage>
  );
}
