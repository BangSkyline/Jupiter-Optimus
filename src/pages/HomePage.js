import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ROISimulator from "../components/ROISimulator";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6e6e6] to-[#ffdb8d]">
      <Header />
      <Hero />
      <Services />
      <ROISimulator />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;