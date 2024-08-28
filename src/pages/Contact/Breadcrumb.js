import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const BreadcrumbSection = () => {
  return (
    <section className="breadcrumb-section">
      <Container>
        <div className="breadcrumb-box">
          <div className="breadcrumb-heading">
            <h2>Contact Us</h2>
          </div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </section>
  );
};

export default BreadcrumbSection;
