import React from "react";
import { Container, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

// Import your images
import testimonial1 from "../../assets/images/testimonial-1.jpg";
import testimonial2 from "../../assets/images/testimonial-2.jpg";
import testimonial3 from "../../assets/images/testimonial-3.jpg";
import testimonial4 from "../../assets/images/testimonial-4.jpg";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <div className="section-title">
          <span>Our Testimonial</span>
          <h2>Our Client Saying!</h2>
        </div>
        <OwlCarousel
          className="slider owl-carousel owl-theme"
          autoplay={true}
          loop={true}
          slideBy={1}
          animateIn="fadeIn"
          animateOut="fadeOut"
          dots={false}
          autoplayHoverPause={true}
          autoplayTimeout={3000}
          smartSpeed={1000}
          nav={true}
          navText={[
            '<span class="custom-prev-icon">&larr;</span>', // Custom previous icon
            '<span class="custom-next-icon">&rarr;</span>', // Custom next icon
          ]}
          navClass={["owl-prev", "owl-next"]}
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          }}
        >
          <div className="slide-item">
            <div
              className="testimonial-item"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" /> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                dolorum quos. Eum omnis ea consectetur reprehenderit minima
                similique nemo corporis!{" "}
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
              <div className="author d-flex">
                <div className="flex-shrink-0">
                  <Image src={testimonial1} alt="" roundedCircle />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2>Luna John</h2>
                  <p>UX Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-item">
            <div
              className="testimonial-item"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" /> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                dolorum quos. Eum omnis ea consectetur reprehenderit minima
                similique nemo corporis!{" "}
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
              <div className="author d-flex">
                <div className="flex-shrink-0">
                  <Image src={testimonial2} alt="" roundedCircle />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2>Michael Wilson</h2>
                  <p>SEO Expert</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-item">
            <div
              className="testimonial-item"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" /> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                dolorum quos. Eum omnis ea consectetur reprehenderit minima
                similique nemo corporis!{" "}
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
              <div className="author d-flex">
                <div className="flex-shrink-0">
                  <Image src={testimonial3} alt="" roundedCircle />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2>Nia Nalson</h2>
                  <p>Business Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-item">
            <div
              className="testimonial-item"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" /> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                dolorum quos. Eum omnis ea consectetur reprehenderit minima
                similique nemo corporis!{" "}
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
              <div className="author d-flex">
                <div className="flex-shrink-0">
                  <Image src={testimonial4} alt="" roundedCircle />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2>Mark Smith</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;
