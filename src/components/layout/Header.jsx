import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "#intro", label: "Accueil" },
  { href: "#projects", label: "Projets" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
  {
    href: "https://github.com/Cosmicgigi",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://atelier-signature.io",
    label: "Atelier Signature",
    external: true,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(".menu-toggle")
    ) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={
          isMenuOpen
            ? "Fermer le menu de navigation"
            : "Ouvrir le menu de navigation"
        }
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
        ref={menuButtonRef}
      >
        <FontAwesomeIcon icon={!isMenuOpen ? faBars : faXmark} />
      </button>
      <nav
        className={`nav ${isMenuOpen ? "active" : ""}`}
        id="nav-menu"
        ref={menuRef}
        role="navigation"
      >
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
    </header>
  );
};

export default Header;
