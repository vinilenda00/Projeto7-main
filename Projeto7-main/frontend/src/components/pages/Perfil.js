import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: hidden;
    margin: 0;
    padding: 0;
  }
`;

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

const MainContent = styled.div`
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
  flex-direction: row;
  flex-wrap: wrap; 
  align-items: flex-start;
  justify-content: flex-start; 
  border-radius: 20px;
  padding: 10px;
  padding-top: 70px;
  overflow-y: auto; 
  box-sizing: border-box;
`;

const SmallSquare = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px; 
  flex-direction: column;
  position: relative; 
  width: calc(33.333% - 20px); 
  height: 180px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(50% - 20px); 
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px); 
  }
`;

const SmallSquareText = styled.div`
  text-align: center;
  margin-top: 5px;
  line-height: 2.5;
`;

const CourseButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: transparent;
  color: #000;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const handleDownload = (url) => {
  window.open(url, '_blank');
};

export default function Profile() {
  return (
    <>
      <GlobalStyles />
      <ProfilePage>
        <MainContent>
          <BigSquare>
            <SmallSquare onClick={() => handleDownload('url_para_curso_1')}>
              <SmallSquareText>
                <h3>Curso 1</h3>
                <p>Horário: 09:00</p>
                <p>Data: 01/01/2024</p>
                <p>Local: FECAP</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare onClick={() => handleDownload('url_para_curso_2')}>
              <SmallSquareText>
                <h3>Curso 2</h3>
                <p>Horário: 10:00</p>
                <p>Data: 02/01/2024</p>
                <p>Local: FECAP</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare onClick={() => handleDownload('url_para_curso_3')}>
              <SmallSquareText>
                <h3>Curso 3</h3>
                <p>Horário: 11:00</p>
                <p>Data: 03/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare onClick={() => handleDownload('url_para_curso_4')}>
              <SmallSquareText>
                <h3>Curso 4</h3>
                <p>Horário: 12:00</p>
                <p>Data: 04/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare onClick={() => handleDownload('url_para_curso_5')}>
              <SmallSquareText>
                <h3>Curso 5</h3>
                <p>Horário: 13:00</p>
                <p>Data: 05/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare onClick={() => handleDownload('url_para_curso_6')}>
              <SmallSquareText>
                <h3>Curso 6</h3>
                <p>Horário: 14:00</p>
                <p>Data: 06/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
          </BigSquare>
        </MainContent>
      </ProfilePage>
    </>
  );
}
