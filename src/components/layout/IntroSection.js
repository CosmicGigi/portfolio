import React from "react";
import profileImage from "../../assets/gigi.jpeg"; // Remplace par le chemin de ton image

const IntroSection = () => {
  return (
    <section className="intro-section" id="intro">
      <img
        src={profileImage}
        alt="Guillaume Charpentier"
        className="profile-image"
      />
      <h1>Guillaume Charpentier</h1>
      <p>Un développeur à la créativité débordante !</p>
    </section>
  );
};

export default IntroSection;
