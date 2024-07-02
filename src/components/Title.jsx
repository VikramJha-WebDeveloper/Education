import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const TitleComponent = styled.div`
  h6 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  h6::after {
    content: "";
    border: 0.5px solid #ed7845;
    width: 200px;
    margin-left: 10px;
  }
`;

const Title = ({ title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <TitleComponent>
      <h6 className="text-secondary" data-aos="fade-up" data-aos-delay="100">
        {title}
      </h6>
      <h2
        className="display-6 fw-bolder"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </h2>
    </TitleComponent>
  );
};
export default Title;
