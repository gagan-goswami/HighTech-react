import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../../pages/Team/Breadcrumb.js";
import Fact from "../../pages/Home/Fact-section";
import Team from "../../pages/Home/Team-section.js";

function TeamPage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <Team />
    </Layout>
  );
}

export default TeamPage;
