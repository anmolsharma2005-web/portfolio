import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />

        <div className="max-w-screen-xl mx-auto">

          {/* ROUTES */}
          <Routes>

            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Features />
                  <Projects />
                  <Resume />
                  <Testimonial />
                  <Contact />
                </>
              }
            />

            {/* SEPARATE ROUTES (यदि आप चाहें तो) */}
            <Route path="/about" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>

          <Footer />
          <FooterBottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
