import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  div.socialMedias {
    display: flex;
    div {
      border-radius: 50%;
      overflow: hidden;
      width: 40px;
      height: 40px;
      transition-duration: 0.3s;
    }
  }
  button[type="submit"]:hover {
    background-color: #fd8d5d;
  }
  a {
    text-decoration: none;
    transition-duration: 0.3s;
  }
  i {
    transition-duration: 0.3s;
  }
  a:hover,
  .socialMedias > div:hover i {
    color: #fd8d5d !important;
  }
  .socialMedias > div:hover {
    border-color: #fd8d5d !important;
  }
`;

const Footer = () => {
  return (
    <FooterSection className="light-gray-bg">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-md-4">
            <h2>Mentor</h2>
            <p className="m-0 text-secondary">A108 Adam Street</p>
            <p className="m-0 text-secondary">New York, NY 535022</p>

            <p className="m-0 mt-3">
              <strong>Phone:</strong>{" "}
              <span className="text-secondary">+1 5589 55488 55</span>
            </p>
            <p className="m-0">
              <strong>Email:</strong>{" "}
              <span className="text-secondary">info@example.com</span>
            </p>
            <div className="socialMedias mt-3">
              <div className="me-2 border border-secondary">
                <a
                  href="#"
                  className="border d-flex w-100 h-100 align-items-center justify-content-center"
                >
                  <i class="fa-brands fa-x-twitter fs-5 text-secondary"></i>
                </a>
              </div>
              <div className="me-2 border border-secondary">
                <a
                  href="#"
                  className="border d-flex w-100 h-100 align-items-center justify-content-center"
                >
                  <i class="fa-brands fa-facebook fs-5 text-secondary"></i>
                </a>
              </div>
              <div className="me-2 border border-secondary">
                <a
                  href="#"
                  className="border d-flex w-100 h-100 align-items-center justify-content-center"
                >
                  <i class="fa-brands fa-instagram fs-5 text-secondary"></i>
                </a>
              </div>
              <div className="me-2 border border-secondary">
                <a
                  href="#"
                  className="border d-flex w-100 h-100 align-items-center justify-content-center"
                >
                  <i class="fa-brands fa-linkedin fs-5 text-secondary"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-4 col-lg-2">
            <h5>Useful Links</h5>
            <ul className="list-group">
              <li className="list-group-item border-0 bg-transparent">
                <a href="#" className="text-secondary">
                  Home
                </a>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <a href="#" className="text-secondary">
                  About Us
                </a>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <a href="#" className="text-secondary">
                  Services
                </a>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <a href="#" className="text-secondary">
                  Terms of service
                </a>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <a href="#" className="text-secondary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-md-4 col-lg-2">
            <h5>Our Services</h5>
            <ul className="list-group">
              <li className="list-group-item border-0 text-secondary bg-transparent">
                <a href="#" className="text-secondary">
                  Web Design
                </a>
              </li>
              <li className="list-group-item border-0 text-secondary bg-transparent">
                <a href="#" className="text-secondary">
                  Web Development
                </a>
              </li>
              <li className="list-group-item border-0 text-secondary bg-transparent">
                <a href="#" className="text-secondary">
                  Product Management
                </a>
              </li>
              <li className="list-group-item border-0 text-secondary bg-transparent">
                <a href="#" className="text-secondary">
                  Marketing
                </a>
              </li>
              <li className="list-group-item border-0 text-secondary bg-transparent">
                <a href="#" className="text-secondary">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-lg-4">
            <h5 className="m-0">Our Newsletter</h5>
            <p className="my-3 text-secondary">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form>
              <div className="input-group rounded-pill overflow-hidden theme-border">
                <input
                  type="text"
                  className="form-control border-0"
                  area-describedBy="submitBtn"
                ></input>
                <button
                  type="submit"
                  className="btn theme-bg cursor-pointer rounded-pill"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="bg-secondary-subtle py-3 my-3">
            <p className="m-0 text-center">
              © Copyright <strong>Mentor</strong> All Rights Reserved
            </p>
            <div className="text-center">
              Designed by <span className="theme-text">BootstrapMade</span>
            </div>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
