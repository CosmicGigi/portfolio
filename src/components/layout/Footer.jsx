import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h5>© 2024 GIGI CODE. Tous droits réservés.</h5>
      <div className="social">
        <ul>
          <li>
            <a
              href="https://www.github.com/CosmicGigi"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
