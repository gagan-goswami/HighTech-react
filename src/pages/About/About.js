import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../../pages/About/Breadcrumb";
import Fact from "../../pages/Home/Fact-section";
import About from "../../pages/Home/About-section";
import Team from "../../pages/Home/Team-section";

function AboutPage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <About />
      <Team />
    </Layout>
  );
}

export default AboutPage;
