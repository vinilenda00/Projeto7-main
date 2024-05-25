import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // Importe o styled-components
import nome from "../components/pages/Cadastro";

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

const ButtonWrapper = styled(Link)`
  text-decoration: none;
`;

const ButtonElement = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 8px 20px;
  border: 1px solid var(--primary);
  transition: all 0.3s ease-out;
  font-size: 25px;

  &:hover {
    background: #fff;
    color: #242424;
    transition: 250ms;
  }
`;

const ProfileName = styled.span`
  margin-right: 10px; /* Ajuste conforme necessário */
`;

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  username
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


};

export default Button;
