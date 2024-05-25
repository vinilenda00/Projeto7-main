import React from 'react';
import styled from 'styled-components';
import IntroImage from '../imagens/intro.webp'; 

const HeroContainer = styled.div`
  background: url(${IntroImage}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;

const HeroSection = () => {
  return (

    <HeroContainer />
  );
}

export default HeroSection;
