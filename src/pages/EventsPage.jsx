import { React, useEffect } from "react";
import PageHeading from "../components/PageHeading";
import styled from "styled-components";
import AOS from "aos";

// import images
import WebDesign from "../../public/images/eventswebdesign.jpg";
import Marketing from "/images/eventsmarketing.jpg";
import Footer from "../components/Footer";

// css for EventsSection
const EventsSection = styled.div`
  .card {
    overflow: hidden;
    .card-body {
      margin-top: -60px;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      background-color: white;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      z-index: 1;
    }
    img {
      transition-duration: 0.3s !important;
    }
  }

  .card:hover img {
    transform: scale(1.1);
  }
`;

const EventsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Events";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <EventsSection>
      <PageHeading title={title} description={description}></PageHeading>
      <div className="container py-5">
        <div className="row">
          <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card border-0 h-100 pb-3">
              <img src={WebDesign} className="img-fluid" />
              <div className="card-body border-0">
                <h3 className="theme-text text-center">
                  Indroduction to web design
                </h3>
                <h6 className="fst-italic my-3 text-center fw-normal">
                  Sunday, September 26th at 7:00 pm
                </h6>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-md-6 mt-3 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card border-0 h-100 pb-3">
              <img src={Marketing} className="img-fluid"></img>
              <div className="card-body border-0">
                <h3 className="theme-text text-center">Marketing Stretegies</h3>
                <h6 className="fst-italic my-3 text-center fw-normal">
                  Sunday, November 15th at 7:00 pm
                </h6>
                <p className="text-secondary">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </EventsSection>
  );
};

export default EventsPage;
