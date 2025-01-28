import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faSass,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const skill = [
  {
    icon: faHtml5,
    title: "HTML5",
    description:
      "Création de pages web optimisées pour l'accessibilité et le SEO.",
  },
  {
    icon: faCss3Alt,
    title: "CSS3",
    description: "Création de designs modernes et responsives.",
  },
  {
    icon: faSass,
    title: "Sass",
    description:
      "Préprocesseur CSS pour un développement rapide, structuré avec la possibilité de créer des animations.",
  },
  {
    icon: faJsSquare,
    title: "JavaScript",
    description: "Développement d'interfaces dynamiques et interactives.",
  },
  {
    icon: faReact,
    title: "React",
    description:
      "Construction de sites et d'applications web performantes avec React et son écosystème.",
  },
  {
    icon: faNodeJs,
    title: "Node.js",
    description:
      "Création de serveurs backend robustes et évolutifs avec Node.js.",
  },
  {
    icon: faGitAlt,
    title: "Git",
    description: "Gestion efficace des versions de projet et de collaboration.",
  },
  {
    icon: faGithub,
    title: "Github",
    description:
      "Plateforme de gestion de code source pour collaborer et partager des projets.",
  },
];

const Skills = () => {
  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading">Mes Compétences Techniques</h2>

      <div className="skills-grid">
        {skill.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon
              icon={skill.icon}
              className="skill-icon"
              aria-hidden="true"
            />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
