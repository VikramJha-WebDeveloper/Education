import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";

const HeadingPage = styled.div`
  li:nth-child(2)::before {
    content: "/";
    display: inline-block;
    margin: 0 20px;
  }
  .pageNav {
    background-color: #ec652a;
  }
`;

const PageHeading = ({ title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <HeadingPage className=" theme-bg py-5 position-relative">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 d-flex align-items-center justify-content-center flex-column">
            <h1 className="fw-bolder" data-aos="fade-left">
              {title}
            </h1>
            <p className="text-center w-75" data-aos="fade-right">
              {description}
            </p>
          </div>
          <div className="col col-12 pageNav position-absolute bottom-0 start-0 py-3">
            <div className="container">
              <div className="row">
                <div className="col col-12">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item bg-transparent border-0 m-0 p-0">
                      <NavLink
                        to="/"
                        className="text-light text-decoration-none"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="list-group-item bg-transparent border-0 text-light m-0 p-0">
                      {title}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeadingPage>
  );
};
export default PageHeading;
