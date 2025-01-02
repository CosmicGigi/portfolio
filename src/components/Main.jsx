import React from "react";
import IntroSection from "./layout/IntroSection";
// import SkillsSection from "./layout/SkillsSection";
import ProjectsSection from "./layout/ProjectsSection";
import AboutSection from "./layout/AboutSection";
import ContactSection from "./layout/ContactSection";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <IntroSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Main;
