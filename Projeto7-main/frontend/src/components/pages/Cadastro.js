import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Logo2 from './../../imagens/LogoFecap2.png';

const FormularioCadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isCadastroSuccess, setIsCadastroSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const professor = ''
        const cpf = ''
        const endereco = ''
        const telefone = ''
        const dataNascimento = "2024-05-24T05:37:04.862Z"
        const curso = ''
        const materia = ''
        const cadastroData = { nome, email, senha, professor, cpf,endereco, telefone, dataNascimento, curso, materia};

        try {
            console.log('rodando...')
            console.log(cadastroData)
            const response = await fetch('https://helpingout.azurewebsites.net/api/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cadastroData)
            });

            if (response.ok) {
                setShowSuccessMessage(true);
                setMessage('Cadastro realizado com sucesso!');
                setTimeout(() => {
                    setIsCadastroSuccess(true);
                }, 2000); // Redireciona após 2 segundos
            } else {
                setMessage('Erro ao realizar o cadastro. Tente novamente.');
            }
        } catch (error) {
            setMessage('Erro ao conectar com o servidor.');
        }
    };

    if (isCadastroSuccess) {
        return <Redirect to="/login" />;
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <LogoContainer>
                    <img src={Logo2} alt="Logo" />
                </LogoContainer>
                <InputBox>
                    <Input
                        type="text"
                        placeholder='Nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </InputBox>
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
                <Button type="submit">Cadastrar</Button>
                {showSuccessMessage && <SuccessMessage>{message}</SuccessMessage>}
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

const SuccessMessage = styled.div`
    color: green;
    font-size: 18px;
    margin-top: 10px;
`;

export default FormularioCadastro;
