import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
  color: #fff;
  background: url("https://raw.githubusercontent.com/akashyap2013/PortFolio_Website/master/img/footer-bg.png")
    no-repeat;
  padding: 5rem 0;
`;
const FooterWrapped = styled.div``;
const Author = styled.h3`
  color: #6f4cff;
`;

const SubTitle = styled.p`
  color: #111;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialLink = styled.a`
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  padding: 18px;
  color: #8b8b96;
  transition: 0.3s ease;
`;

const Copyright = styled.p`
  color: #8b8b96;
`;

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <FooterContainer className="container-fluid">
      <FooterWrapped className="container">
        <Author>Huy</Author>
        <SubTitle>Frontend Developer</SubTitle>
        <Social>
          <SocialLink href="https://www.facebook.com/tranquanghuy172/">
            <ion-icon name="logo-facebook" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/__huytrann__/">
            <ion-icon name="logo-instagram" />
          </SocialLink>

          <SocialLink href="https://join.skype.com/invite/XekoC2bjM8es">
            <ion-icon name="logo-skype" />
          </SocialLink>
          <SocialLink href="https://github.com/quanghuytran172">
            <ion-icon name="logo-github" />
          </SocialLink>
        </Social>

        <Copyright>Copyright ©{getYear} All rights reserved</Copyright>
      </FooterWrapped>
    </FooterContainer>
  );
};

export default Footer;
