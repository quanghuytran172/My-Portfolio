import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IntroContainer = styled.div`
  background-color: #6f4cff;
  padding-top: 100px;
  padding-bottom: 100px;
`;
const IntroWrapped = styled.div`
  text-align: center;
  color: #fff;
`;

const IntroTitle = styled.h3`
  font-size: 23px;
  margin-bottom: 16px;
`;
const IntroSubTitle = styled.p`
  font-weight: 400;
  margin-bottom: 16px;
`;
const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  color: #6f4cff;
  background-color: #fff;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  span {
    display: flex;
    align-items: center;
  }
  ion-icon {
    margin-left: 8px;
  }
  &:hover {
    background-color: #fff;
    color: #6f4cff;
  }
`;
const ContactIntro = () => (
  <IntroContainer className="container-fluid">
    <IntroWrapped className="container">
      <IntroTitle>You have a new project</IntroTitle>
      <IntroSubTitle>
        Contact me now and get a 30% discount on your new project
      </IntroSubTitle>
      <Button to="/">
        <span>
          Contact Me <ion-icon name="send-outline" />
        </span>
      </Button>
    </IntroWrapped>
  </IntroContainer>
);

export default ContactIntro;
