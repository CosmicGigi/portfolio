import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "#intro", label: "Accueil" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
  { href: "https://github.com/Cosmicgigi", label: "GitHub", external: true },
  {
    href: "https://atelier-signature.io",
    label: "Atelier Signature",
    external: true,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".menu-toggle") &&
        !event.target.closest(".nav")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>
      {isMenuOpen && (
        <nav className="nav" id="nav-menu">
          <ul className="nav-list">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
