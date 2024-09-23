import React from "react";
import kasaImage from "../../assets/kasa.jpg";
import calculator from "../../assets/calculator.jpg";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Mes Réalisations</h2>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://gigicalculator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${calculator})` }}
            ></div>
            <div className="project-content" id="projects">
              <h3>Calculatrice</h3>
              <p>
                Calculatrice simple mais fonctionnelle, disponible sur GitHub.
              </p>
            </div>
          </a>
        </div>
        <div className="project">
          <a
            href="https://gigikasa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${kasaImage})` }}
            ></div>
            <div className="project-content">
              <h3>Kasa</h3>
              <p>Une application de location immobilière, type AirBnb.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
