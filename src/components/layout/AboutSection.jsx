import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRunning,
  faCompass,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const subsectionsData = [
  {
    icon: faCode,
    title: "Développeur Passionné",
    description:
      "Je mets à profit mes compétences pour aider mes clients à atteindre leurs objectifs, et je cherche à progresser chaque jour avec de nouveaux langages et frameworks.",
  },
  {
    icon: faRunning,
    title: "Danseur Professionnel",
    description:
      "La danse est une partie essentielle de ma vie, alliant discipline et créativité. L'art et le développement partagent une beauté : celle de transformer des idées en réalité.",
    link: {
      href: "https://youtu.be/h9mo-1cM8Z8",
      label: "Voir une vidéo sur YouTube",
      icon: faVideo,
    },
  },
  {
    icon: faCompass,
    title: "Aventurier dans l'âme",
    description:
      "J'aime explorer de nouveaux horizons et découvrir ce que la vie a à offrir. La curiosité est une qualité essentielle pour s'épanouir dans ce monde.",
  },
];

const AboutSection = () => {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">De l'autre côté de l'écran</h2>

      <div className="about-subsections">
        {subsectionsData.map((subsection, index) => (
          <div className="subsection" key={index}>
            <FontAwesomeIcon
              icon={subsection.icon}
              className="icon"
              aria-hidden="true"
            />
            <h3>{subsection.title}</h3>
            <p>{subsection.description}</p>
            {subsection.link && (
              <a
                href={subsection.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
                aria-label={subsection.link.label}
              >
                <FontAwesomeIcon
                  icon={subsection.link.icon}
                  className="youtube-icon"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
