import React from "react";
import styled from "styled-components";
import Typical from "react-typical";

import banner from "../../assets/img/banner.jpg";

const HeroComponent = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  min-height: 500px;
  /* background-color: #0f1525; */
  background-image: url(${banner});
  background-position: center center;
  background-size: cover;
`;
const HomeContent = styled.div`
  margin: auto;
  color: #fff;
  .text-1 {
    font-size: 30px;
  }
  .text-2 {
    max-width: 500px;
    font-size: 75px;
    font-weight: 600;
    margin: -8px 0;
    background-image: linear-gradient(to right, #0bc5ea, #3182ce, #6b46c1);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-3 {
    font-weight: 600;
    font-size: 40px;
    span {
      display: inline-block;
      color: crimson;
    }
  }
  .hire-butotn {
    display: inline-block;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    padding: 8px 25px;
    border-radius: 4px;
    color: #fff;
    border: 2px solid #fff;
    transition: all 0.6s ease 0s;

    &:hover {
      background: #fff;
      color: #000;
    }
  }

  .social-box {
    a {
      display: inline-block;
      margin: 20px 16px 20px 0;
    }
    ion-icon {
      color: #8b8b96;
      font-size: 25px;
      transition: 0.3s ease;
    }
    ion-icon:hover {
      color: #fff;
    }
  }
  @media screen and (max-width: 690px) {
    .text-2 {
      font-size: 60px;
    }
    .text-3 {
      font-weight: 600;
      font-size: 32px;
    }
    .hire-butotn {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .text-1 {
      font-size: 24px;
    }
    .text-2 {
      font-size: 50px;
    }
    .text-3 {
      font-weight: 600;
      font-size: 25px;
    }
    .hire-butotn {
      font-size: 16px;
      padding: 8px 20px;
    }
    .social-box {
      a {
        display: inline-block;
        margin: 12px 16px 12px 0;
      }
      ion-icon {
        font-size: 22px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .text-1 {
      font-size: 20px;
    }
    .text-2 {
      font-size: 45px;
    }
    .text-3 {
      font-weight: 600;
      font-size: 18px;
    }
    .hire-butotn {
      font-size: 16px;
      padding: 8px 20px;
    }
  }
`;

const HeroSection = () => (
  <HeroComponent data-aos="fade" data-aos-once="true" data-aos-duration="800">
    <HomeContent
      className="container"
      id="home"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="text-1">Hello, My name is</div>
      <div className="text-2">Quang Huy</div>
      <div className="text-3">
        And I&apos;m a{" "}
        <Typical
          steps={[
            "Frontend Developer",
            1500,
            "Designer",
            1500,
            "Freelancer",
            1500,
          ]}
          loop={Infinity}
          wrapper="span"
        />
      </div>
      <div className="social-box">
        <a href="https://www.facebook.com/tranquanghuy172/">
          <ion-icon name="logo-facebook" />
        </a>
        <a href="https://www.instagram.com/__huytrann__/">
          <ion-icon name="logo-instagram" />
        </a>
        <a href="https://join.skype.com/invite/XekoC2bjM8es">
          <ion-icon name="logo-skype" />
        </a>
        <a href="https://github.com/quanghuytran172">
          <ion-icon name="logo-github" />
        </a>
      </div>
      <a href="#contact" className="hire-butotn">
        Hire me
      </a>
    </HomeContent>
  </HeroComponent>
);

export default HeroSection;
