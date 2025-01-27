import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://www.github.com/CosmicGigi",
    label: "Visitez mon profil GitHub",
    icon: faGithub,
    className: "github",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <h5>© 2025 GIGI CODE. Tous droits réservés.</h5>
      <nav className="social">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={link.className}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
