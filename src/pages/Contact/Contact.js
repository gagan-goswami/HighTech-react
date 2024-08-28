import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../../pages/Contact/Breadcrumb.js";
import Contact from "../../pages/Home/get-in-touch.js";
import Fact from "../Home/Fact-section.js";

function ContactPage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <Contact />
    </Layout>
  );
}

export default ContactPage;
