import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  h2 {
    margin-bottom: 16px;
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }

  a:hover {
    color: #e9e9e9;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>Fecap<i class='fab fa-typo3' /></SocialLogo>
          <WebsiteRights>FECAP © 2024</WebsiteRights>
          <SocialIcons>
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'><i class='fab fa-facebook-f' /></Link>
            <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'><i class='fab fa-instagram' /></Link>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'><i class='fab fa-youtube' /></Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'><i class='fab fa-twitter' /></Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'><i class='fab fa-linkedin' /></Link>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
