import { React, useEffect } from "react";
import PageHeading from "../components/PageHeading";
import Footer from "../components/Footer";
import styled from "styled-components";
import AOS from "aos";

// css for Footer section
const FooterSection = styled.div`
  div.icon {
    width: 50px;
    height: 50px;
  }
  button:hover {
    background-color: #f88d5f !important;
  }
`;

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Contact";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <FooterSection>
      <PageHeading title={title} description={description}></PageHeading>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13983.868785492412!2d77.08535674725229!3d28.810051410904016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da9f0f4676da5%3A0x1a1ab9a5ae021769!2sHolambi%20Kalan%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719284725858!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container py-5">
          <div className="row">
            <div className="col col-12 col-lg-4">
              <div
                className="d-flex align-items-center my-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon border d-flex align-items-center justify-content-center rounded rounded-circle theme-bg me-3">
                  <i class="fa-solid fa-location-dot fs-5"></i>
                </div>
                <div>
                  <h6 className="m-0">Address</h6>
                  <p className="m-0">
                    Near Aadhya Public School, Holambi kalan
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-center my-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon border d-flex align-items-center justify-content-center rounded rounded-circle theme-bg me-3">
                  <i class="fa-solid fa-phone fs-5"></i>
                </div>
                <div>
                  <h6 className="m-0">Call Us</h6>
                  <p className="m-0">+1 5589 55488 55</p>
                </div>
              </div>
              <div
                className="d-flex align-items-center my-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon border d-flex align-items-center justify-content-center rounded rounded-circle theme-bg me-3">
                  <i class="fa-solid fa-envelope fs-5"></i>
                </div>
                <div>
                  <h6 className="m-0">Email Us</h6>
                  <p className="m-0">info@example.com</p>
                </div>
              </div>
            </div>
            <div
              className="col col-12 col-lg-8 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form>
                <div className="row g-3">
                  <div className="col col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="col col-12 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="col col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    ></input>
                  </div>
                  <div className="col col-12">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="col col-12 text-center">
                    <button
                      type="submit"
                      className="btn theme-bg rounded-pill px-4 text-light"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </FooterSection>
  );
};
export default ContactPage;
