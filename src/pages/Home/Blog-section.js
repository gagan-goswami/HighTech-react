import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faCalendarAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <Container>
        <div className="section-title">
          <span>Our Blog</span>
          <h2>Latest Blog & News</h2>
        </div>
        <Row>
          <Col lg={4} md={6}>
            <div className="blog" data-aos="fade-left" data-aos-duration={1000}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src={blog1}
                  className="img-fluid"
                  alt="blog-image"
                />
                <Card.Body>
                  <div className="teg">
                    <span>Web Design</span>
                  </div>
                  <p className="card-title">Solutions IT</p>
                  <h2 className="card-subtitle mb-2">
                    vital tips for blockchain software product
                  </h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content ut labore etsu ...
                  </p>
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <div className="content-box">
                    <div className="icon">
                      <p>
                        <FontAwesomeIcon icon={faShare} /> 1298
                      </p>
                    </div>
                    <div className="icon ms-3">
                      <p>
                        <FontAwesomeIcon icon={faCalendarAlt} /> JANUARY 12,
                        2022
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="blog" data-aos="fade-left" data-aos-duration={1000}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src={blog2}
                  className="img-fluid"
                  alt="blog-image"
                />
                <Card.Body>
                  <div className="teg">
                    <span>Development</span>
                  </div>
                  <p className="card-title">Solutions IT</p>
                  <h2 className="card-subtitle mb-2">
                    native or cross-platform : mobile development{" "}
                  </h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content ut labore etsu ...
                  </p>
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <div className="content-box">
                    <div className="icon">
                      <p>
                        <FontAwesomeIcon icon={faShare} /> 1878
                      </p>
                    </div>
                    <div className="icon ms-3">
                      <p>
                        <FontAwesomeIcon icon={faCalendarAlt} /> February 27,
                        2022
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="blog" data-aos="fade-left" data-aos-duration={1000}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src={blog3}
                  className="img-fluid"
                  alt="blog-image"
                />
                <Card.Body>
                  <div className="teg">
                    <span>Mobile App</span>
                  </div>
                  <p className="card-title">Solutions IT</p>
                  <h2 className="card-subtitle mb-2">
                    10 Efficient & Measurable Benefits of Software{" "}
                  </h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content ut labore etsu ...
                  </p>
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <div className="content-box">
                    <div className="icon">
                      <p>
                        <FontAwesomeIcon icon={faShare} /> 2243
                      </p>
                    </div>
                    <div className="icon ms-3">
                      <p>
                        <FontAwesomeIcon icon={faCalendarAlt} /> August 13, 2022
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
