import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import carousel1 from "../../assets/images/carousel-1.jpg";
import carousel2 from "../../assets/images/carousel-2.jpg";

function Hero() {
  const options = {
    autoplay: true,
    loop: true,
    slideBy: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    dots: true,
    nav: true,
    navText: [
<<<<<<< HEAD
      '<span class="custom-prev-icon">←</span>', // Custom previous icon
      '<span class="custom-next-icon">→</span>', // Custom next icon
=======
      '<span class="custom-prev-icon">⬅</span>', // Custom previous icon
      '<span class="custom-next-icon">➡</span>', // Custom next icon
>>>>>>> 82422eb8588415befe0d99f32c4d0c9e9d059e71
    ],
    navClass: ["owl-prev", "owl-next"],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 1 },
    },
  };

  return (
    <section className="hero-section">
      <OwlCarousel className="slider-1" {...options}>
        <div className="slide-item">
          <div
            className="slide"
            style={{
              backgroundImage: `url(${carousel1})`,
            }}
          >
            <Container>
              <div className="content">
                <span data-aos="fade-left" data-aos-duration={2000}>
                  Best IT Solutions
                </span>
                <h2 data-aos="fade-left" data-aos-duration={2000}>
                  An Innovative IT Solutions Agency
                </h2>
                <p data-aos="fade-left" data-aos-duration={2000}>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum. Pellentesque aliquam dolor eget urna ultricies
                  tincidunt.
                </p>
                <div
                  className="booking-btn"
                  data-aos="fade-left"
                  data-aos-duration={2000}
                >
                  <Link to="/" className="read">
                    READ MORE
                  </Link>
                  <Link
                    to="/"
                    className="contactbtn"
                    data-aos="fade-left"
                    data-aos-duration={2000}
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="slide"
            style={{
              backgroundImage: `url(${carousel2})`,
            }}
          >
            <Container>
              <div className="content">
                <span data-aos="fade-up" data-aos-duration={3000}>
                  Best IT Solutions
                </span>
                <h2 data-aos="fade-left" data-aos-duration={3000}>
                  Quality Services You Really Need!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum. Pellentesque aliquam dolor eget urna ultricies
                  tincidunt.
                </p>
                <div className="booking-btn">
                  <Link to="/" className="read">
                    READ MORE
                  </Link>
                  <Link to="/" className="contactbtn">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
}

export default Hero;
