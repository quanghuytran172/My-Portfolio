import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import projectData from "./ProjectData";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProjectSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  transition: all 0.3s ease-in-out;
  .swiper-container {
    margin-top: -40px;
    padding: 40px 0;
  }
  .swiper-slide {
    padding: 0 50px;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #6f4cff;
  }
  .swiper-pagination-bullet-active {
    background-color: #6f4cff;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-weight: 600;
    font-size: 35px;
  }
  .project-content {
    padding-left: 25px;
  }
  @media screen and (max-width: 960px) {
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 25px;
    }
    .project-content {
      padding-left: calc(var(--bs-gutter-x) * 0.5);
    }
    h3 {
      margin-top: 30px;
    }
  }
`;

const ProjectImage = styled.img`
  border-radius: 7px;
  /* min-height: 230px; */
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 15px 0;
`;

const ProjectDescription = styled.p`
  color: #8b8b96;
`;

const Button = styled.a`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  outline: none !important;
  cursor: pointer;
  border-radius: 5px;
  background-color: #6f4cff;
  padding: 14px 32px;
  opacity: 0.92;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    color: #fff;
  }
`;
const Projects = () => (
  <ProjectSection className="container" id="projects">
    <h1
      className="text-section"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      Projects
    </h1>
    <p
      className="text-center text-subtitle"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      Some of my recent works
    </p>
    <Swiper
      slidesPerView="auto"
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      {projectData.map(project => (
        <SwiperSlide data-swiper-autoplay="2000" key={project.id}>
          <div className="row align-items-center py-4">
            <div className="col-md-5">
              <ProjectImage
                className="img-fluid"
                src={project.img}
                alt="Project image"
              />
            </div>
            <div className="col-md-7 project-content">
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Button href={project.demoLink}>Demo</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </ProjectSection>
);

export default Projects;
