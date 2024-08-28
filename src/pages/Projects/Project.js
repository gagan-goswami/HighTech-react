import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../../pages/Projects/Breadcrumb.js";
import Fact from "../../pages/Home/Fact-section";
import Project from "../../pages/Home/Our-project-section.js";

function ProjectPage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <Project />
    </Layout>
  );
}

export default ProjectPage;
