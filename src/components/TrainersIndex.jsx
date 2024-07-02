import { React, useEffect } from "react";
import AOS from "aos";
import styled from "styled-components";

const TrainersSection = styled.div`
  div.socialMedias a i {
    transition-duration: 0.3s;
  }
  div.socialMedias a:hover i {
    color: #ed7845 !important;
  }
`;

// import images
import WalterWhite from "/images/trainer1.png";
import SarahJhinson from "/images/trainer2.png";
import WilliamAnderson from "/images/trainer3.png";

const TrainersIndex = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <TrainersSection>
      <div className="container py-5">
        <div className="row">
          <div
            className="col col-12 col-md-6 col-lg-4 mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card h-100 overflow-hidden">
              <img src={WalterWhite}></img>
              <div className="card-body d-flex align-items-center justify-content-center flex-column ">
                <h4 className="card-title">Walter White</h4>
                <h6 className="fst-italic text-secondary fw-bolder">
                  Web Development
                </h6>
                <p className="card-text fst-italic text-secondary text-center my-3">
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio
                  veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className="socialMedias">
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card h-100 overflow-hidden">
              <img src={SarahJhinson}></img>
              <div className="card-body d-flex align-items-center justify-content-center flex-column ">
                <h4 className="card-title">Sarah Jhinson</h4>
                <h6 className="fst-italic text-secondary fw-bolder">
                  Marketing
                </h6>
                <p className="card-text fst-italic text-secondary text-center my-3">
                  Repellat fugiat adipisci nemo illum nesciunt voluptas
                  repellendus. In architecto rerum rerum temporibus
                </p>
                <div className="socialMedias">
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card h-100 overflow-hidden">
              <img src={WilliamAnderson}></img>
              <div className="card-body d-flex align-items-center justify-content-center flex-column ">
                <h4 className="card-title">William Anderson</h4>
                <h6 className="fst-italic text-secondary fw-bolder">Content</h6>
                <p className="card-text fst-italic text-secondary text-center my-3">
                  Voluptas necessitatibus occaecati quia. Earum totam
                  consequuntur qui porro et laborum toro des clara
                </p>
                <div className="socialMedias">
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="text-secondary mx-1 fs-5 fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TrainersSection>
  );
};
export default TrainersIndex;
