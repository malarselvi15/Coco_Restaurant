import React from "react";
import Home from "./components/Home";
import About from "./components/About";
// import FeatureSection from "./components/FeatureSection";
import TransparentSection from "./components/TransparentSection";
// import Favorites from "./components/Favorites";
import Testimonials from "./components/Testimonials";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <>
     
      <Home />
      <About />
      {/* <FeatureSection /> */}
      <TransparentSection />
      {/* <Favorites /> */}
      
      <MenuSection />
      <Testimonials />
    </>
  );
}

export default App;
