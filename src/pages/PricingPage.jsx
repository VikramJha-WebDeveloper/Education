import { React, useEffect } from "react";
import PageHeading from "../components/PageHeading";
import styled from "styled-components";
import AOS from "aos";
import Footer from "../components/Footer";

// css for PricingSection
const PricingSection = styled.div`
  button:hover {
    background-color: #f88d5f !important;
  }
  .card {
    border: 0;
  }
  #advanced {
    transform: rotate(39deg);
    right: -39px;
    top: 21px;
  }
`;

const PricingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Pricing";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <PricingSection>
      <PageHeading title={title} description={description}></PageHeading>
      <div className="container py-5">
        <div className="row">
          <div
            className="col col-12 col-lg-6 col-xl-3 mt-3 mt-xl-0"
            data-aos="flip-left"
          >
            <div className="card overflow-hidden">
              <h6 className="card-title light-gray-bg text-center py-3 m-0">
                Free
              </h6>
              <div className="card-body p-0 border">
                <h5 className="fs-2 text-center m2-3">
                  <sup className="fs-5">$</sup>0{" "}
                  <span className="text-secondary fs-6">/ month</span>
                </h5>
                <ul className="list-group text-center">
                  <li className="list-group-item border-0">Alida dere</li>
                  <li className="list-group-item border-0">Nec feugiat nisl</li>
                  <li className="list-group-item border-0">
                    nulla at volutpat dola
                  </li>
                  <li className="list-group-item border-0">
                    <del className="text-secondary">Pharetra massa</del>
                  </li>
                  <li className="list-group-item">
                    <del className="text-secondary">Massa ultricies mi</del>
                  </li>
                </ul>
              </div>
              <div className="text-center light-gray-bg py-3">
                <button className="btn theme-bg border-0 text-light">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-3 mt-3 mt-xl-0"
            data-aos="flip-left"
          >
            <div className="card overflow-hidden">
              <h6 className="card-title theme-bg text-center py-3 m-0">
                Business
              </h6>
              <div className="card-body p-0 border">
                <h5 className="fs-2 text-center m2-3">
                  <sup className="fs-5">$</sup>19{" "}
                  <span className="text-secondary fs-6">/ month</span>
                </h5>
                <ul className="list-group text-center">
                  <li className="list-group-item border-0">Alida dere</li>
                  <li className="list-group-item border-0">Nec feugiat nisl</li>
                  <li className="list-group-item border-0">
                    nulla at volutpat dola
                  </li>
                  <li className="list-group-item border-0">Pharetra massa</li>
                  <li className="list-group-item border-0">
                    <del className="text-secondary">Massa ultricies mi</del>
                  </li>
                </ul>
              </div>
              <div className="text-center light-gray-bg py-3">
                <button className="btn theme-bg border-0 text-light">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-3 mt-3 mt-xl-0"
            data-aos="flip-left"
          >
            <div className="card overflow-hidden">
              <h6 className="card-title light-gray-bg text-center py-3 m-0">
                Developer
              </h6>
              <div className="card-body p-0 border">
                <h5 className="fs-2 text-center m2-3">
                  <sup className="fs-5">$</sup>29{" "}
                  <span className="text-secondary fs-6">/ month</span>
                </h5>
                <ul className="list-group text-center">
                  <li className="list-group-item border-0">Alida dere</li>
                  <li className="list-group-item border-0">Nec feugiat nisl</li>
                  <li className="list-group-item border-0">
                    nulla at volutpat dola
                  </li>
                  <li className="list-group-item border-0">Pharetra massa</li>
                  <li className="list-group-item border-0">
                    Massa ultricies mi
                  </li>
                </ul>
              </div>
              <div className="text-center light-gray-bg py-3">
                <button className="btn theme-bg border-0 text-light">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-3 mt-3 mt-xl-0"
            data-aos="flip-left"
          >
            <div className="card overflow-hidden position-relative">
              <h6 className="card-title light-gray-bg text-center py-3 m-0">
                Ultimate
                <span
                  id="advanced"
                  className="theme-bg position-absolute py-1 px-5"
                >
                  Advanced
                </span>
              </h6>
              <div className="card-body p-0 border">
                <h5 className="fs-2 text-center m2-3">
                  <sup className="fs-5">$</sup>49{" "}
                  <span className="text-secondary fs-6">/ month</span>
                </h5>
                <ul className="list-group text-center">
                  <li className="list-group-item border-0">Alida dere</li>
                  <li className="list-group-item border-0">Nec feugiat nisl</li>
                  <li className="list-group-item border-0">
                    nulla at volutpat dola
                  </li>
                  <li className="list-group-item border-0">Pharetra massa</li>
                  <li className="list-group-item border-0">
                    Massa ultricies mi
                  </li>
                </ul>
              </div>
              <div className="text-center light-gray-bg py-3">
                <button className="btn theme-bg border-0 text-light">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </PricingSection>
  );
};
export default PricingPage;
