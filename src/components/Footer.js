import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faAngleRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../../src/Styles/FooterStyle.css";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* == footer-section-start == */}
      <footer className="footer" data-aos="zoom-in" data-aos-duration={1500}>
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-item">
                <div className="footer-logo">
                  <Link to="/" className="navbar-brand">
                    <h2>
                      High<span>Tech</span>
                    </h2>
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facere delectus qui placeat consectetur repellendus
                  optio debitis.
                </p>
                <ul className="footer-social">
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
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item">
                <h2>Quick Links</h2>
                <ul className="page-link">
                  <li>
                    <Link to="/about">
                      <FontAwesomeIcon icon={faAngleRight} /> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/features">
                      <FontAwesomeIcon icon={faAngleRight} /> Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing">
                      <FontAwesomeIcon icon={faAngleRight} /> Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <FontAwesomeIcon icon={faAngleRight} /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <FontAwesomeIcon icon={faAngleRight} /> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item">
                <h2>Support</h2>
                <ul className="Quick-links">
                  <li>
                    <Link to="/privacy-policy">
                      <FontAwesomeIcon icon={faAngleRight} /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms">
                      <FontAwesomeIcon icon={faAngleRight} /> Terms &amp;
                      Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/sitemap">
                      <FontAwesomeIcon icon={faAngleRight} /> Sitemap
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs">
                      <FontAwesomeIcon icon={faAngleRight} /> FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/report-bug">
                      <FontAwesomeIcon icon={faAngleRight} /> Report a bug
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item">
                <h2>Contact Us</h2>
                <ul className="service-links">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, New
                      York, USA
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faPhone} /> +123 456 7890
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:info@example.com">
                      <FontAwesomeIcon icon={faEnvelope} /> info@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copy-right">
          <p>Copyright ©2024 All rights reserved</p>
        </div>
        {showTopButton && (
          <div className="top-button">
            <a href="/" className="top" onClick={scrollToTop}>
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        )}
      </footer>
      {/* == footer-section-end == */}
    </>
  );
}

export default Footer;
