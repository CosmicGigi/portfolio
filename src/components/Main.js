import React from "react";
import IntroSection from "./layout/IntroSection";
import SkillsSection from "./layout/SkillsSection";
import ProjectsSection from "./layout/ProjectsSection";
import AboutSection from "./layout/AboutSection";
import ContactSection from "./layout/ContactSection";
import Header from "./layout/Header";

const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Main;
