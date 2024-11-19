import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/* Add routes for other pages here */}
    </>
  );
};

export default App;
