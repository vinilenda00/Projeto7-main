import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaTh, FaCalendarAlt, FaUser, FaEnvelope, FaQuestionCircle, FaBars } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
/*nao tem nada aqui vou add*/
`;

const SidebarContainer = styled.div`
    background: #00693C;
    color: #fff;
    height: 92vh;
    width: ${({ isOpen }) => (isOpen ? '200px' : '60px')};
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: fixed;
`;

const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 15px;
`;

const Logo = styled.h1`
    font-size: 30px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Bars = styled.div`
    display: flex;
    font-size: 25px;
    margin-left: ${({ isOpen }) => (isOpen ? '-150px' : '-10px')};
    cursor: pointer;
`;

const Link = styled(NavLink)`
    display: flex;
    color: #fff;
    padding: 25px 15px;
    gap: 20px; 
    transition: all 0.5s;

    &:hover {
        background: #0FAA75;
        color: #000;
        transition: all 0.5s;
    }

    &.active {
        background: #0FAA75;
        color: #000;
    }
    text-decoration: none;

    &:last-child { /* Aplica o estilo apenas ao último link */
        margin-top: auto; /* Move o último link para o final da barra lateral */
    }
`;

const Icon = styled.div`
    font-size: 20px;
`;

const LinkText = styled.div`
    font-size: 20px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Início",
            icon: <FaTh />
        },
        {
            path: "/Eventos",
            name: "Eventos",
            icon: <FaCalendarAlt />
        },
        {
            path: "/Perfil",
            name: "Perfil",
            icon: <FaUser />
        },
        {
            path: "/Convite",
            name: "Convite",
            icon: <FaEnvelope />
        },
        {
            path: "/Ajuda",
            name: "Ajuda",
            icon: <FaQuestionCircle />
        },
    ];

    return (
        <Container>
            <SidebarContainer isOpen={isOpen}>
                <TopSection>
                    <Logo isOpen={isOpen}></Logo>
                    <Bars isOpen={isOpen}>
                        <FaBars onClick={toggle}/>
                    </Bars>
                </TopSection>
                {
                    menuItem.map((item, index) => (
                        <Link to={item.path} key={index} activeClassName="active" exact> {/* Adicione exact aqui */}
                            <Icon>{item.icon}</Icon>
                            <LinkText isOpen={isOpen}>{item.name}</LinkText>
                        </Link>
                    ))
                }
            </SidebarContainer>
            <Main>{children}</Main>
        </Container>
    );
};

export default Sidebar;
