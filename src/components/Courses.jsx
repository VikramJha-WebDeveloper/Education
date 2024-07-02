import { React, useEffect } from "react";
import Title from "./Title";
import styled from "styled-components";
import AOS from "aos";

// css for Courses Section
const CoursesSection = styled.div`
  .card {
    overflow: hidden;
  }
  .card > div div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card > div > div {
    justify-content: space-between;
  }
  .card h6,
  i {
    color: #adacac;
  }
  .card h6 {
    margin: 0;
  }
  .card i,
  .card i + h6 {
    font-size: 20px;
  }
`;

// import images
import WebDevelopment from "/images/coursesImg1.jpg";
import Marketing from "/images/coursesImg2.jpg";
import Copywriting from "/images/coursesImg3.jpg";
import Antonio from "/images/coursesImg4.jpg";
import Lana from "/images/coursesImg5.jpg";
import Brandon from "/images/coursesImg6.jpg";

const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Courses";
  let description = "Popular Courses";
  return (
    <CoursesSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <Title title={title} description={description}></Title>
          </div>
          <div className="col col-12 mt-5">
            <div className="row">
              <div
                className="col col-12 col-md-6 col-lg-4 mt-3 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="card h-100">
                  <img src={WebDevelopment} className="img-fluid"></img>
                  <div className="card-body">
                    <h4 className="fs-6 theme-bg d-inline-block py-2 px-3 rounded mb-3">
                      Web Development
                    </h4>
                    <h3 className="fs-4 fw-bolder">Website Design</h3>
                    <p className="text-secondary card-text">
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <hr />
                    <div>
                      <div>
                        <img
                          src={Antonio}
                          className="me-2 rounded rounded-circle"
                        ></img>
                        <h6 className="text-secondary">Antonio</h6>
                      </div>
                      <div>
                        <div className="me-3">
                          <i class="fa-solid fa-user me-2"></i>
                          <h6>50</h6>
                        </div>
                        <div>
                          <i class="fa-solid fa-heart me-2"></i>
                          <h6>65</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col col-12 col-md-6 col-lg-4 mt-3 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="card h-100">
                  <img src={Marketing} className="img-fluid"></img>
                  <div className="card-body">
                    <h4 className="fs-6 theme-bg d-inline-block py-2 px-3 rounded mb-3">
                      Marketing
                    </h4>
                    <h3 className="fs-4 fw-bolder">
                      Search Engine Optimization
                    </h3>
                    <p className="text-secondary card-text">
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <hr />
                    <div>
                      <div>
                        <img
                          src={Lana}
                          className="me-2 rounded rounded-circle"
                        ></img>
                        <h6 className="text-secondary">Lana</h6>
                      </div>
                      <div>
                        <div className="me-3">
                          <i class="fa-solid fa-user me-2"></i>
                          <h6>35</h6>
                        </div>
                        <div>
                          <i class="fa-solid fa-heart me-2"></i>
                          <h6>42</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col col-12 col-md-6 col-lg-4 mt-3 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="card h-100">
                  <img src={Copywriting} className="img-fluid"></img>
                  <div className="card-body">
                    <h4 className="fs-6 theme-bg d-inline-block py-2 px-3 rounded mb-3">
                      Content
                    </h4>
                    <h3 className="fs-4 fw-bolder">Copywriting</h3>
                    <p className="text-secondary card-text">
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <hr />
                    <div>
                      <div>
                        <img
                          src={Brandon}
                          className="me-2 rounded rounded-circle"
                        ></img>
                        <h6 className="text-secondary">Brandon</h6>
                      </div>
                      <div>
                        <div className="me-3">
                          <i class="fa-solid fa-user me-2"></i>
                          <h6>20</h6>
                        </div>
                        <div>
                          <i class="fa-solid fa-heart me-2"></i>
                          <h6>85</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoursesSection>
  );
};
export default Courses;
