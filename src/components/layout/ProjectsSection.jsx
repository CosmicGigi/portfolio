import React from "react";
import kasaImage from "../../assets/kasa.webp";
import labellesuzette from "../../assets/lbs.webp";
import booki from "../../assets/booki.webp";
import ninaCarducci from "../../assets/ninacarducci.webp";
import events from "../../assets/724events.webp";
import portfolio from "../../assets/portfolio.webp";

const projects = [
  {
    title: "La Belle Suzette",
    description:
      "Site d'un restaurant bordelais, avec formulaire de réservation et SEO optimisé.",
    image: labellesuzette,
    url: "https://labellesuzette.fr",
    tags: ["Vite.js", "React", "Sass", "SEO", "Formik"],
  },
  {
    title: "Kasa",
    description: "Une application de location immobilière, type AirBnb.",
    image: kasaImage,
    url: "https://gigikasa.vercel.app",
    tags: ["React", "Sass"],
  },
  {
    title: "Portfolio",
    description: "Création de mon Portfolio personnel.",
    image: portfolio,
    url: "https://gigicode.vercel.app/",
    tags: ["React", "Sass", "Formik"],
  },
  {
    title: "Booki",
    description: "Site d'hébergement de vacances, type Booking.",
    image: booki,
    url: "https://cosmicgigi.github.io/booki/",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Nina Carducci Photographe",
    description:
      "Site d'une photographe, avec un référencement local performant. (non responsive)",
    image: ninaCarducci,
    url: "https://cosmicgigi.github.io/ninacarducci/",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "SEO"],
  },
  {
    title: "724 Events",
    description: "Site d'une agence événementielle. (non responsive)",
    image: events,
    url: "https://724-events-nine.vercel.app/",
    tags: ["React", "Sass", "Jest"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Mes Réalisations</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le projet : ${project.title}`}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
