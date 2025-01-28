import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import IntroSection from "./layout/IntroSection";
import Skills from "./layout/Skills";
import ProjectsSection from "./layout/ProjectsSection";
import AboutSection from "./layout/AboutSection";
import ContactSection from "./layout/ContactSection";

const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <IntroSection />
      <ProjectsSection />
      <Skills />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Main;
