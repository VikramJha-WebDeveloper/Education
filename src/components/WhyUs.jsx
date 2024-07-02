import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

//css for WhyUsSection
const WhyUsSection = styled.div`
  div.icon {
    /* border: 2px solid red; */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-left: 50%;
    transform: translateX(-50%); */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition-duration: 1s;
  }

  a:hover {
    background-color: white;
    color: #ed7845 !important;
  }
  .card:hover div.icon {
    background-color: #ed7845;
  }
  i {
    transition-duration: 0.5s;
  }
  .card:hover div.icon i {
    color: white !important;
  }
`;

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <WhyUsSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-4 h-100" data-aos="fade-up">
            <div className="card p-3 theme-bg">
              <div className="card-body">
                <h2 className="fw-bolder card-title">
                  Why Choose Our Products?
                </h2>
                <p className="card-text my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <a href="#" className="btn light-theme-bg text-light">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-8">
            <div className="row h-100">
              <div
                className="col col-12 col-lg-4 mt-3 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card h-100">
                  <div className="card-body d-flex align-items-center justify-content-center flex-column">
                    <div className="icon light-gray-bg">
                      <i class="fa-solid fa-clipboard fs-2 theme-text"></i>
                    </div>
                    <h3 className="card-title text-center fs-4 my-3">
                      Corporis voluptates officia eusmod
                    </h3>
                    <p className="card-text text-center">
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col col-12 col-lg-4 mt-3 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card h-100">
                  <div className="card-body d-flex align-items-center justify-content-center flex-column">
                    <div className="icon light-gray-bg">
                      <i class="fa-solid fa-gem fs-2 theme-text"></i>
                    </div>
                    <h3 className="card-title text-center fs-4 my-3">
                      Ullamco laboris ladore pan
                    </h3>
                    <p className="card-text text-center">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col col-12 col-lg-4 mt-3 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card h-100">
                  <div className="card-body d-flex align-items-center justify-content-center flex-column">
                    <div className="icon light-gray-bg">
                      <i class="fa-solid fa-inbox fs-2 theme-text"></i>
                    </div>
                    <h3 className="card-title text-center fs-4 my-3">
                      Labore consequatur incidid dolore
                    </h3>
                    <p className="card-text text-center">
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhyUsSection>
  );
};
export default WhyUs;
