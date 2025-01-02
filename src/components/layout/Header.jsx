import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={!isMenuOpen ? faBars : faXmark} />
      </button>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <ul className="nav-list">
          {[
            { href: "#intro", label: "Accueil" },
            { href: "#skills", label: "Compétences" },
            { href: "#projects", label: "Projets" },
            { href: "#about", label: "À propos" },
            { href: "#contact", label: "Contact" },
            {
              href: "https://github.com/Cosmicgigi",
              label: "GitHub",
              external: true,
            },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={toggleMenu}
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
