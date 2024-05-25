import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Logo2 from './../../imagens/LogoFecap2.png';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = { email, senha };

        try {
            const response = await fetch('https://helpingout.azurewebsites.net/api/usuario/autenticacaoUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                setMessage('Login bem-sucedido!');
                onLogin(); // Chama a função onLogin passada como prop
                history.push('/');
            } else {
                if (response.status === 401) {
                    setMessage('Senha incorreta.');
                } else if (response.status === 404) {
                    setMessage('Usuário não encontrado.');
                } else {
                    setMessage('Erro no servidor.');
                }
            }
        } catch (error) {
            setMessage('Erro ao conectar com o servidor.');
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <LogoContainer>
                    <img src={Logo2} alt="Logo" />
                </LogoContainer>
                <InputBox>
                    <Input
                        type="email"
                        placeholder='E-mail*'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="password"
                        placeholder='Senha*'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </InputBox>

                <RememberForgot>
                    <label>
                        <input type="checkbox" /> Lembrar-me
                    </label>
                </RememberForgot>

                <Button type="submit">Acessar</Button>
                {message && <p>{message}</p>}

                <RegisterLink>
                    <p>Não possui uma conta? <StyledLink to="/cadastro">Criar conta</StyledLink></p>
                </RegisterLink>
            </form>
        </Wrapper>
    );
};

// Estilos
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00693C;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
`;

const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    background-color: #00693C;
    margin: 30px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #fff;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 10px;
    font-size: 16px;
    color: black;
    padding: 0 15px;
`;

const RememberForgot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
`;

const Button = styled.button`
    height: 45px;
    width: 100%;
    background-color: black;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
`;

const RegisterLink = styled.div`
    font-size: 14.5px;
    text-align: center;
    margin-top: 20px;
`;

const StyledLink = styled(Link)`
    color: #ffffff;
    text-decoration: underline;

    &:hover {
        color: #cccccc;
    }
`;

export default Login;
