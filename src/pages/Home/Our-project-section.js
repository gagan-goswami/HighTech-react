import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Project1 from "../../assets/images/project-1.jpg";
import Project2 from "../../assets/images/project-2.jpg";
import Project3 from "../../assets/images/project-3.jpg";
import Project4 from "../../assets/images/project-4.jpg";
import Project5 from "../../assets/images/project-5.jpg";
import Project6 from "../../assets/images/project-6.jpg";

const projects = [
  {
    image: Project1,
    title: "Web Design",
    description: "Web Analysis",
    animation: "fade-down",
  },
  {
    image: Project2,
    title: "Cyber Security",
    description: "Cyber Security Core",
    animation: "fade-down",
  },
  {
    image: Project3,
    title: "Mobile Info",
    description: "Upcoming Phone",
    animation: "fade-down",
  },
  {
    image: Project4,
    title: "Web Development",
    description: "Web Analysis",
    animation: "fade-up",
  },
  {
    image: Project5,
    title: "Digital Marketing",
    description: "Marketing Analysis",
    animation: "fade-up",
  },
  {
    image: Project6,
    title: "Keyword Research",
    description: "Keyword Analysis",
    animation: "fade-up",
  },
];

const OurProjects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <section className="our-project">
      <Container>
        <div className="section-title">
          <span>Our Project</span>
          <h2>Our Recently Completed Projects</h2>
        </div>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className="project-item"
                data-aos={project.animation}
                data-aos-duration="1500"
              >
                <div className="project-image">
                  <img
                    src={project.image} // Use the directly imported image
                    className="img-fluid"
                    alt={project.title}
                  />
                </div>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurProjects;
