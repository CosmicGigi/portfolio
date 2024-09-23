import React from "react";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Mes Réalisations</h2>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/CosmicGigi/Calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: "url(path_to_calculator_image.jpg)" }}
            ></div>
            <div className="project-content" id="projects">
              <h3>Mon projet de calculatrice</h3>
              <p>
                Calculatrice simple mais fonctionnelle, disponible sur GitHub.
              </p>
            </div>
          </a>
        </div>
        <div className="project">
          <div
            className="project-image"
            style={{ backgroundImage: "url(path_to_todo_image.jpg)" }}
          ></div>
          <div className="project-content">
            <h3>To-Do List Application</h3>
            <p>
              Une application de liste de tâches intuitive, optimisée pour
              mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
