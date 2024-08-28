import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Team1 from "../../assets/images/team-1.jpg";
import Team2 from "../../assets/images/team-2.jpg";
import Team3 from "../../assets/images/team-3.jpg";
import Team4 from "../../assets/images/team-4.jpg";

const TeamSection = () => {
  // Owl Carousel settings
  const options = {
    autoplay: true,
    loop: true,
    slideBy: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  useEffect(() => {
    // Initialize AOS if using AOS library
    // AOS.init();
  }, []);

  return (
    <section className="team-section">
      <Container>
        <div className="section-title">
          <span>Our Team</span>
          <h2>Meet our expert Team</h2>
        </div>
        <OwlCarousel
          className="team-slider owl-carousel owl-themes"
          {...options}
        >
          <div
            className="slide-item"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="our-team">
              <div className="pic">
                <Image src={Team1} alt="Juliya Arther" className="img-fluid" />
              </div>
              <div className="team-content">
                <h2 className="title">Juliya Arther</h2>
                <span className="post">Web Designer</span>
              </div>
              <ul className="social">
                <li>
                  <Link to="/" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="slide-item"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="our-team">
              <div className="pic">
                <Image src={Team2} alt="John Wilson" className="img-fluid" />
              </div>
              <div className="team-content">
                <h2 className="title">John Wilson</h2>
                <span className="post">Web Developer</span>
              </div>
              <ul className="social">
                <li>
                  <Link to="/" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="slide-item"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="our-team">
              <div className="pic">
                <Image
                  src={Team3}
                  alt="Kristiana Tailor"
                  className="img-fluid"
                />
              </div>
              <div className="team-content">
                <h2 className="title">Kristiana Tailor</h2>
                <span className="post">App Developer</span>
              </div>
              <ul className="social">
                <li>
                  <Link to="/" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="slide-item"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="our-team">
              <div className="pic">
                <Image src={Team4} alt="Roni Mertiyo" className="img-fluid" />
              </div>
              <div className="team-content">
                <h2 className="title">Roni Mertiyo</h2>
                <span className="post">SEO Expert</span>
              </div>
              <ul className="social">
                <li>
                  <Link to="/" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </section>
  );
};

export default TeamSection;
