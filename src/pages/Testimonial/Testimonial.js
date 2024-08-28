import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../../pages/Testimonial/Breadcrumb.js";
import Fact from "../../pages/Home/Fact-section";
import Testimonial from "../../pages/Home/Testimonial-section.js";

function TestimonialPage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <Testimonial />
    </Layout>
  );
}

export default TestimonialPage;
