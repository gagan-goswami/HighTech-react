import React from "react";
import Layout from "../../components/Layout";
import Breadcrumb from "../../pages/Services/Breadcrumb";
import Fact from "../../pages/Home/Fact-section";
import Service from "../../pages/Home/Service-section";

function ServicePage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <Service />
    </Layout>
  );
}

export default ServicePage;
