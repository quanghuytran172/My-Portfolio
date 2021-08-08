import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { EducationData, skillData, personalData } from "./AboutData";
import Education from "./Education";
import Skills from "./Skills";

const AboutSection = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  transition: all 0.3s ease-in-out;
  h3 {
    letter-spacing: 13px;
    font-weight: 600;
    font-size: 35px;
  }
  @media screen and (max-width: 690px) {
    h3 {
      font-size: 30px;
    }
  }
`;
const PText = styled.p`
  color: #8b8b96;
`;

const ImgPersonl = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const Button = styled.a`
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

const About = () => (
  <AboutSection className="container" id="about">
    <Fade top>
      <h1 className="text-section">About Me</h1>
      <PText className="text-center">My introduction</PText>
    </Fade>
    <div className="row align-items-center">
      <div className="col-lg-5 ">
        <Fade left>
          <ImgPersonl src={personalData.imgSrc} className="img-fluid" alt="" />
        </Fade>
      </div>
      <div className="col-lg-7  ml-5">
        <Fade right delay={500}>
          <div>
            <h3 className="mb-4 mt-4">
              LET ME
              <br />
              INTRODUCE <br />
              MYSELF
            </h3>
            <PText>{personalData.description}</PText>
          </div>

          <div className="my-3">
            <h4 className="mb-3">EXPERIENCE & EDUCATION</h4>
            {EducationData.map(item => (
              <Education key={item.id} data={item} />
            ))}
          </div>

          <div className="my-3">
            <h4 className="mb-3">MY SKILLS</h4>
            {skillData.map(item => (
              <Skills topic={item.topic} skills={item.skills} key={item.id} />
            ))}
          </div>
          <Button href={personalData.linkCV} className="mt-2">
            <span>DOWNLOAD CV</span>
          </Button>
        </Fade>
      </div>
    </div>
  </AboutSection>
);

export default About;
