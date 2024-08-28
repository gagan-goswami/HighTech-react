import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "../../components/Counter";

function Fact() {
  return (
    <section className="fact-section">
      <Container>
        <h2 className="d-none">title</h2>
        <Row>
          <Col lg={3} md={6}>
            <div
              className="fact-item"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <div className="fact-content">
                <Counter endValue={999} duration={5000} />{" "}
                {/* Use Counter component */}
                <span>+</span>
                <p>Success in getting happy customer</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="fade-left" data-aos-duration={2000}>
            <div className="fact-item">
              <div className="fact-content">
                <Counter endValue={1200} duration={5000} />{" "}
                {/* Use Counter component */}
                <span>+</span>
                <p>Thousands of successful business</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div
              className="fact-item"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <div className="fact-content">
                <Counter endValue={400} duration={5000} />{" "}
                {/* Use Counter component */}
                <span>+</span>
                <p>Total clients who love HighTech</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div
              className="fact-item"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <div className="fact-content">
                <Counter endValue={5} duration={5000} />{" "}
                {/* Use Counter component */}
                <span>+</span>
                <p>Stars reviews given by satisfied clients</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Fact;
