import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// css for count section
const CountSection = styled.div`
  /* background-color: #f8f8f8; */
`;

const Counts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <CountSection className="light-gray-bg">
      <div className="container py-5">
        <div className="row">
          <div
            className="col col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="display-4 text-center fw-bold theme-text">1232</h3>
            <p className="text-center text-secondary">Students</p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="display-4 text-center fw-bold theme-text">64</h3>
            <p className="text-center text-secondary">Courses</p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="display-4 text-center fw-bold theme-text">42</h3>
            <p className="text-center text-secondary">Events</p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="display-4 text-center fw-bold theme-text">24</h3>
            <p className="text-center text-secondary">Trainers</p>
          </div>
        </div>
      </div>
    </CountSection>
  );
};

export default Counts;
