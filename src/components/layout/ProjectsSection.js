import React from "react";
import kasaImage from "../../assets/kasa.jpg";
import calculator from "../../assets/calculator.jpg";
import booki from "../../assets/booki.jpg";
import ninaCarducci from "../../assets/ninacarducci.jpg";
import events from "../../assets/724events.jpg";

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
                Calculatrice simple et fonctionnelle, disponible sur GitHub.
              </p>
              <p>React, Sass</p>
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
              <p>React, Sass</p>
            </div>
          </a>
        </div>
        <div className="project">
          <a
            href="https://cosmicgigi.github.io/booki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${booki})` }}
            ></div>
            <div className="project-content">
              <h3>Booki</h3>
              <p>Site d'hébergement de vacances, type Booking.</p>
              <p>HTML, CSS</p>
            </div>
          </a>
        </div>
        <div className="project">
          <a
            href="https://cosmicgigi.github.io/ninacarducci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${ninaCarducci})` }}
            ></div>
            <div className="project-content">
              <h3>Nina Carducci Photographe</h3>
              <p>
                Site d'une photographe, avec un référencement local performant.
              </p>
              <p>HTML, CSS, JavaScrip, JQuery, SEO</p>
            </div>
          </a>
        </div>
        <div className="project">
          <a
            href="https://724eventsproject.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${events})` }}
            ></div>
            <div className="project-content">
              <h3>Nina Carducci Photographe</h3>
              <p>Site d'une agence événementielle.</p>
              <p>React, Sass, Jest</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
