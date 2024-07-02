import React, { useEffect } from "react";
import Title from "./Title";
import styled from "styled-components";
import AOS from "aos";

// import images
import SaulGoodMan from "../../public/images/testimonialImg1.jpg";
import SaraWilsson from "../../public/images/testimonialImg4.jpg";
import JenaKarlis from "../../public/images/testimonialImg5.jpg";
import MattBrandon from "../../public/images/testimonialImg2.jpg";
import JohnLarson from "../../public/images/testimonialImg3.jpg";

// css for Testimonials section
const TestimonialSection = styled.div`
  .carousel-inner {
    height: 500px !important;
  }
  img {
    margin-bottom: 20px;
  }
`;

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Testimonials";
  let description = "WHAT ARE THEY SAYING";
  return (
    <TestimonialSection className="my-5">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <Title title={title} description={description}></Title>

            <div
              id="carouselExampleDark"
              class="carousel slide mt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="carousel-indicators mb-0 position-absolute py-2">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="6"
                  aria-label="Slide 7"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="7"
                  aria-label="Slide 8"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="8"
                  aria-label="Slide 9"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="9"
                  aria-label="Slide 10"
                ></button>
              </div>
              <div class="carousel-inner">
                <div
                  class="carousel-item active h-100"
                  data-bs-interval="10000"
                >
                  <div className="card h-100 theme-bg h-100">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={SaulGoodMan}
                        className="rounded rounded-circle"
                      />
                      <h5 className="card-title">Saul Goodman</h5>
                      <h6 className="text-secondary">CEO and Founder</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Natus dolore ullam aperiam dolorum accusamus,
                        praesentium deleniti hic accusantium, similique cum
                        doloremque architecto. Consequatur amet id eveniet.
                        Quos, dolore quia. Dolore.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100" data-bs-interval="2000">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={SaraWilsson}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Sara Willson</h5>
                      <h6 className="text-secondary">Designer</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente, non ad illum libero aspernatur atque
                        accusamus cum nobis autem sunt!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={JenaKarlis}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Jena Karlis</h5>
                      <h6 className="text-secondary">Store Owner</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laudantium corporis numquam repellendus? Magni rem
                        ipsum, itaque ea iusto, harum inventore placeat aliquid
                        aut possimus eveniet.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={MattBrandon}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Matt Brandon</h5>
                      <h6 className="text-secondary">Freelancer</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Natus dolore ullam aperiam dolorum accusamus,
                        praesentium deleniti hic accusantium, similique cum
                        doloremque architecto. Consequatur amet id eveniet.
                        Quos, dolore quia. Dolore.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={JohnLarson}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">John Larson</h5>
                      <h6 className="text-secondary">Enterpreneur</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Omnis aliquam illo error amet soluta modi
                        necessitatibus ratione ut debitis at repudiandae
                        expedita voluptas maiores labore ad, ex doloremque natus
                        ducimus.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="carousel-item h-100" data-bs-interval="10000">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={SaulGoodMan}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Saul Goodman</h5>
                      <h6 className="text-secondary">CEO and Founder</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Natus dolore ullam aperiam dolorum accusamus,
                        praesentium deleniti hic accusantium, similique cum
                        doloremque architecto. Consequatur amet id eveniet.
                        Quos, dolore quia. Dolore.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100" data-bs-interval="2000">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={SaraWilsson}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Sara Willson</h5>
                      <h6 className="text-secondary">Designer</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente, non ad illum libero aspernatur atque
                        accusamus cum nobis autem sunt!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={JenaKarlis}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Jena Karlis</h5>
                      <h6 className="text-secondary">Store Owner</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laudantium corporis numquam repellendus? Magni rem
                        ipsum, itaque ea iusto, harum inventore placeat aliquid
                        aut possimus eveniet.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={MattBrandon}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">Matt Brandon</h5>
                      <h6 className="text-secondary">Freelancer</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Natus dolore ullam aperiam dolorum accusamus,
                        praesentium deleniti hic accusantium, similique cum
                        doloremque architecto. Consequatur amet id eveniet.
                        Quos, dolore quia. Dolore.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div className="card h-100 theme-bg">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={JohnLarson}
                        className="rounded rounded-circle"
                      ></img>
                      <h5 className="card-title">John Larson</h5>
                      <h6 className="text-secondary">Enterpreneur</h6>
                      <div className="d-flex my-3">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <p className="text-center w-75">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Omnis aliquam illo error amet soluta modi
                        necessitatibus ratione ut debitis at repudiandae
                        expedita voluptas maiores labore ad, ex doloremque natus
                        ducimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </TestimonialSection>
  );
};

export default Testimonials;
