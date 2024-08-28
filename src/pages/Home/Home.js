import React from "react";
import Layout from "../../components/Layout";
import "../../Styles/HomeStyle.css";
import Hero from "./Hero-section";
import Fact from "./Fact-section";
import About from "./About-section";
import Service from "./Service-section";
import OurProjects from "./Our-project-section";
import BlogSection from "./Blog-section";
import Team from "./Team-section";
import Testimonial from "./Testimonial-section";
import Getintouch from "./get-in-touch";

function Home() {
  return (
    <Layout>
      {/* hero-section */}
      <Hero />
      {/* fact-section */}
      <Fact />
      {/* about-section */}
      <About />
      {/* service-section */}
      <Service />
      {/* project-section */}
      <OurProjects />
      {/* blog-section */}
      <BlogSection />
      {/* Team-section */}
      <Team />
      {/* Testimonial-section */}
      <Testimonial />
      {/* GetinTouch-section */}
      <Getintouch />
    </Layout>
  );
}

export default Home;
