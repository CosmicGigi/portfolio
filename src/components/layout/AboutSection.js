import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRunning,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2>De l'autre coté de l'écran</h2>

      <div className="about-subsections">
        <div className="subsection">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Développeur Passionné</h3>
          <p>
            Je mets à profit mes compétences pour aider mes clients à atteindre
            leurs objectifs.
          </p>
        </div>
        <div className="subsection">
          <FontAwesomeIcon icon={faRunning} className="icon" />{" "}
          <h3>Danseur Professionnel</h3>
          <p>
            La danse est une partie essentielle de ma vie, alliant discipline et
            créativité. L'art et le développement partagent une beauté : celle
            de transformer des idées en réalité.
          </p>
        </div>
        <div className="subsection">
          <FontAwesomeIcon icon={faCompass} className="icon" />
          <h3>Aventurier dans l'âme</h3>
          <p>
            J'aime explorer de nouveaux horizons et découvrir ce que la vie a à
            offrir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
