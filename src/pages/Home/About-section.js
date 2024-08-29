import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import About1 from "../../assets/images/about-1.jpg";
import About2 from "../../assets/images/about-2.jpg";

function About() {
  return (
    <>
      {/* == about-section-start == */}
      <section className="about-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div
                className="about-item"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="about-image">
                  <img
                    src={About1}
                    className="img-fluid about-1"
                    alt="about-image"
                  />
                  <div className="about-image-two">
                    <img
                      src={About2}
                      className="img-fluid about-2"
                      alt="about-image"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div
                className="about-item"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="about-content">
                  <span>About Us</span>
                  <h2>
                    About HighTech Agency And It's Innovative IT Solutions
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    efficitur quis purus ut interdum. Pellentesque aliquam dolor
                    eget urna ultricies tincidunt. Nam volutpat libero sit amet
                    leo cursus, ac viverra eros tristique. Morbi quis quam mi.
                    Cras vel gravida eros. Proin scelerisque quam nec elementum
                    viverra. Suspendisse viverra et malesuada augue laoreet.
                  </p>
                  <p>
                    Pellentesque aliquam dolor eget urna ultricies tincidunt.
                    Nam volutpat libero sit amet leo cursus, ac viverra eros
                    tristique. Morbi quis quam mi. Cras vel gravida eros. Proin
                    scelerisque quam nec elementum viverra. Suspendisse viverra
                    hendrerit diam in tempus.
                  </p>
                  <div className="details">
                    <Link to="/" className="details-btn">
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* == about-section-end == */}
    </>
  );
}

export default About;
