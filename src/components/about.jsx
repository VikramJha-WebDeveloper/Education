import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import GroupImg from "/images/about_img.jpg";

// css for aboutSection
const AboutSection = styled.div`
  li::before {
    font-weight: 900;
    content: "✓ ";
    font-size: 15px;
    color: #ed7845;
  }
  .col {
    z-index: 0;
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <AboutSection>
      <div className="container py-5">
        <div className="row">
          <div
            className="col col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center"
            data-aos="fade-up"
          >
            <h2 className="fw-bolder">
              Voluptatem dignissimos provident quasi corporis
            </h2>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
            <ul className="list-group">
              <li className="list-group-item border-0 ps-0">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-group-item border-0 ps-0">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="list-group-item border-0 ps-0">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <a href="#" className="btn theme-bg mt-3">
              Read More
            </a>
          </div>
          <div
            className="col col-12 col-lg-6 d-flex align-items-center justify-content-center mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={GroupImg} className="img-fluid" />
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
