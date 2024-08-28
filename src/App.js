import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import AboutPage from "./pages/About/About.js";
import ServicePage from "./pages/Services/Service.js";
import ProjectPage from "./pages/Projects/Project.js";
import BlogPage from "./pages/Blog/Blog.js";
import TeamPage from "./pages/Team/Team.js";
import TestimonialPage from "./pages/Testimonial/Testimonial.js";
import ErrorPage from "./pages/404page/Error.js";
import ContactPage from "./pages/Contact/Contact.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/Testimonial" element={<TestimonialPage />} />
        <Route path="/404Error" element={<ErrorPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
