import React from "react";
import profileImage from "../../assets/gigi.webp";

const IntroSection = () => {
  return (
    <header className="intro-section" id="intro">
      <img
        src={profileImage}
        alt="Portrait de Guillaume Charpentier, développeur web"
        className="profile-image"
        loading="lazy"
      />
      <h1>Guillaume Charpentier</h1>
      <p>
        Développeur web passionné et créatif, je transforme vos idées en
        solutions sur mesure, performantes et élégantes. Ensemble, construisons
        des expériences numériques uniques.
      </p>
    </header>
  );
};

export default IntroSection;
