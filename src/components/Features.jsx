import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const FeaturesSection = styled.div`
  .card {
    position: relative;
    transition-duration: 0.5s;
    a {
      text-decoration: none;
    }
  }
  .card h5 a {
    transition-duration: 0.3s;
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  .card:hover {
    border-color: #ed7845;
  }
  .card:hover h5 a {
    color: #ed7845 !important;
  }
  .card i {
    position: absolute;
    left: 10%;
  }
`;

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <FeaturesSection>
      <div className="container py-5">
        <div className="row">
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-eye fs-4 me-3 text-primary"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Lorem Ipsum
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-infinity fs-4 me-3 text-danger"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Doler Sitema
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-graduation-cap fs-4 me-3 text-success"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Sed perspiciatis
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-screwdriver-wrench fs-4 me-3 text-warning"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Magni Dolores
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-shuffle fs-4 me-3 text-info"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Nemo Enim
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-star fs-4 me-3 text-primary"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Eiusmod Tempor
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-diamond fs-4 me-3 text-danger"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Midela Teren
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-video fs-4 me-3 text-success"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Pira Neve
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-film fs-4 me-3 text-warning"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Dirada Pack
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-basketball fs-4 me-3 text-info"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Moton Ideal
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-chart-line fs-4 me-3 text-primary"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Verdo Park
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-sun fs-4 me-3 text-danger"></i>
                <h5 className="card-title">
                  <a href="#" className="text-dark">
                    Flavor Nivelanda
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturesSection>
  );
};
export default Features;
