import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="#intro" onClick={toggleMenu}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              À propos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
