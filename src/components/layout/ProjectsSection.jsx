import React from "react";
import kasaImage from "../../assets/kasa.jpg";
import labellesuzette from "../../assets/lbs.jpg";
import booki from "../../assets/booki.jpg";
import ninaCarducci from "../../assets/ninacarducci.jpg";
import events from "../../assets/724events.jpg";
import portfolio from "../../assets/portfolio.jpg";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Mes Réalisations</h2>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://labellesuzette.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${labellesuzette})` }}
            ></div>
            <div className="project-content" id="projects">
              <h3>La Belle Suzette</h3>
              <p>
                Site d'un restaurant Bordelais, avec formulaire de réservation
                et SEO optimisé.
              </p>
              <p>Vite.js, React, Sass, SEO, Formik</p>
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
            href="https://gigicode.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${portfolio})` }}
            ></div>
            <div className="project-content">
              <h3>Portfolio</h3>
              <p>Création de mon Portfolio personnel.</p>
              <p>React, Sass, Formik</p>
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
                (non responsive)
              </p>
              <p>HTML, CSS, JavaScript, JQuery, SEO.</p>
            </div>
          </a>
        </div>
        <div className="project">
          <a
            href="https://724-events-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${events})` }}
            ></div>
            <div className="project-content">
              <h3>724 Events</h3>
              <p>Site d'une agence événementielle. (non responsive)</p>
              <p>React, Sass, Jest.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
