import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-reveal";
import ServiceData from "./ServiceData";

const ServiceSection = styled.section`
  padding-top: 100px;
  padding-bottom: 200px;
  transition: all 0.3s ease-in-out;
`;

const CardService = styled.div`
  height: 420px;
  text-align: center;
  padding: 60px 30px;
  margin-top: 20px;
  background: #f8faff;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
  }
`;

const CardImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 45px;
`;

const CardTitle = styled.h4`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;

const CardDescription = styled.p`
  color: #8b8b96;
`;
const Services = () => (
  <ServiceSection className="container" id="services">
    <Fade top>
      <h1 className="text-section">Services</h1>
      <p className="text-center text-subtitle">What i provide</p>
    </Fade>
    <div className="row align-items-center ">
      {ServiceData.map(service => (
        <div className="col-lg-4 col-md-6" key={service.id}>
          <Zoom>
            <CardService>
              <CardImg src={service.img} alt="webDev" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardService>
          </Zoom>
        </div>
      ))}
    </div>
  </ServiceSection>
);

export default Services;
