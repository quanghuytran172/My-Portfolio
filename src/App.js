import "./App.css";
import React from "react";
import About from "./components/About/About";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import ContactIntro from "./components/ContactIntro/ContactIntro";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <ContactIntro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
