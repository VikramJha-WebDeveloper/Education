import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import BackgroundImage from "/images/hero-bg.jpg";

const HeroSection = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImage});
  a {
    transition-property: all;
    transition-duration: 0.5s !important;
  }
  a:hover {
    background-color: #ed7845;
    border-color: #ed7845 !important;
  }
`;

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <HeroSection>
      <div className="container h-100">
        <div className="row h-100">
          <div className=" text-light col col-12 d-flex align-items-start justify-content-center flex-column">
            <h1 className="fw-bolder display-4" data-aos="fade-up">
              Learning Today, <br />
              Leading Tomorrow
            </h1>
            <p className="fs-4 lh-lg" data-aos="fade-up" data-aos-delay="100">
              We are team of talented designers making websites with Bootstrap
            </p>
            <a
              href="#"
              className="btn border border-3 text-light fw-bolder mt-2 py-2 px-5 rounded-pill"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};
export default Hero;
