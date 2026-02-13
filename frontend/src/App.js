import React from "react";
import Navbar from "./components/Navbar";   // ✅ Add Navbar

import Home from "./components/Home";
import About from "./components/About";
import TransparentSection from "./components/TransparentSection";
import Testimonials from "./components/Testimonials";
import MenuSection from "./components/MenuSection";
import CateringEnquiry from "./components/CateringEnquiry";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <TransparentSection />

      <section id="menu">
        <MenuSection />
      </section>

      <Testimonials />

      <section id="enquiry">
        <CateringEnquiry />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <FloatingCallButton />
    </>
  );
}

export default App;
