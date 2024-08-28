import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFileCode,
  faExternalLinkAlt,
  faUserSecret,
  faEnvelopeOpen,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

// Services data array
const services = [
  {
    icon: faCode,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    animation: "fade-left",
    link: "/",
  },
  {
    icon: faFileCode,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    animation: "fade-left",
    link: "/",
  },
  {
    icon: faExternalLinkAlt,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    animation: "fade-left",
    link: "/",
  },
  {
    icon: faUserSecret,
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    animation: "fade-right",
    link: "/",
  },
  {
    icon: faEnvelopeOpen,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    animation: "fade-right",
    link: "/",
  },
  {
    icon: faLaptopCode,
    title: "Programming",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    animation: "fade-right",
    link: "/",
  },
];

const ServicesSection = () => {
  return (
    <section className="service-section">
      <Container>
        <div className="section-title">
          <span>Our Services</span>
          <h2>Services Built Specifically For Your Business</h2>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className="service-item"
                data-aos={service.animation}
                data-aos-duration="2000"
              >
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="service-btn">
                  <Link to={service.link}>Read More</Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
