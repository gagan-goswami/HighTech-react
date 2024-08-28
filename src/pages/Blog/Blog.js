import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../../pages/Blog/Breadcrumb.js";
import Fact from "../../pages/Home/Fact-section";
import Blog from "../../pages/Home/Blog-section.js";

function BlogPage() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Fact />
      <Blog />
    </Layout>
  );
}

export default BlogPage;
