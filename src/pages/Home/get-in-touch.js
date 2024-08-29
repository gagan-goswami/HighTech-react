import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="get-in-touch">
      <Container>
        <div className="section-title">
          <span>Get In Touch</span>
          <h2>Contact for any query</h2>
        </div>
        <Row>
          <Col lg={6}>
            <div
              className="get-in-touch-item"
              data-aos="fade-down-right"
              data-aos-duration={1000}
            >
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="get-in-touch-item"
              data-aos="fade-down-left"
              data-aos-duration={1000}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Your Name:" />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control type="text" placeholder="Phone Number:" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control type="text" placeholder="Email Address:" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control as="textarea" rows={5} placeholder="Message:" />
                </Form.Group>
                <div className="mt-4">
                  <Button type="submit" className="submit-btn">
                    Send Now
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
