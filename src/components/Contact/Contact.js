import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

import ContactData from "./ContactData";

const ContactContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  transition: all 0.3s ease-in-out;
`;
const ContactItem = styled.div`
  padding: 3rem 0;
  text-align: center;
  ion-icon {
    font-size: 45px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 55px;
    }
  }
`;
const ContactTitle = styled.h5`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const ContactSubTitle = styled.p`
  color: #8b8b96;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 5px 5px 12px;
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  padding: 5px 5px 5px 12px;
  height: 120px;
`;

const ButtonSubmit = styled.a`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-top: 20px;
  font-size: 14px;
  line-height: 46px;
  outline: none !important;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(to right, #4458dc 0%, #854fee 100%),
    radial-gradient(circle at top left, #4458dc, #854fee);
  border: double 2px transparent;
  box-shadow: 0 10px 30px rgb(118 85 225 / 30%);
  transition: 0.3s ease;
  &:hover {
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #4458dc, #854fee);
    border: 2px solid #854fee;
    color: #222;
    box-shadow: none;
    background-clip: border-box;
  }
  span {
    padding: 0 42px;
  }
`;
const Contact = () => (
  <ContactContainer className="container" id="contact">
    <Fade top>
      <h1 className="text-section">Contact Me</h1>
      <p className="text-center text-subtitle">What i provide</p>
    </Fade>
    <div className="row">
      {ContactData.map(contact => (
        <div className="col-lg-4 col-md-6" key={contact.id}>
          <Fade right>
            <ContactItem>
              <ion-icon name={contact.iconName} />
              <ContactTitle>{contact.title}</ContactTitle>
              <ContactSubTitle>{contact.subTitle}</ContactSubTitle>
            </ContactItem>
          </Fade>
        </div>
      ))}
    </div>
    <form action="#">
      <Fade top>
        <div className="row">
          <div className="col-lg-6 mt-3">
            <Input type="text" placeholder="Your Name *" />
          </div>
          <div className="col-lg-6 mt-3">
            <Input type="text" placeholder="Your email *" />
          </div>
          <div className="col-lg-12 mt-3">
            <Input type="text" placeholder="Your Subject..." />
          </div>
          <div className="col-lg-12 mt-3">
            <TextArea type="text" placeholder="Your Message..." />
          </div>
        </div>
        <div className="text-center">
          <ButtonSubmit type="submit">
            <span>Send Message</span>
          </ButtonSubmit>
        </div>
      </Fade>
    </form>
  </ContactContainer>
);

export default Contact;
