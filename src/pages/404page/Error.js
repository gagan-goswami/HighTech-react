import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./Breadcrumb.js";
import Layout from "../../components/Layout.js";
import Fact from "../Home/Fact-section.js";

const Page404 = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Fact />
      <section className="page-404">
        <Container>
          <Row>
            <div className="error-box text-center">
              <h2>
                4
                <span>
                  <FontAwesomeIcon icon={faGhost} />
                </span>
                4
              </h2>
              <span className="title">Error: 404 page not found</span>
              <p>Sorry, the page you're looking for cannot be accessed</p>
              <div className="back-link">
                <Link to="/" variant="primary">
                  Back To Home
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Page404;
