import React from "react";
import profileImage from "../../assets/gigi.webp";

const IntroSection = () => {
  return (
    <header className="intro-section" id="intro">
      <img
        src={profileImage}
        alt="Portrait de Guillaume Charpentier, développeur web"
        className="profile-image"
        loading="lazy"
      />
      <h1>Guillaume Charpentier</h1>
      <p>
        Originaire du Mans et danseur professionnel hip-hop et classique depuis
        plus de 15 ans, j'ai eu la chance de représenter mon groupe et mon pays
        dans le monde entier, ainsi que de transmettre ma passion à travers
        l'enseignement.
        <br />
        C'est en 2024 que j'ai décidé de me reconvertir, en suivant une
        formation diplomante avec OpenClassrooms. Cela m'a permis d'acquérir un
        professionnalisme et une rigueur, essentiels dans le domaine du
        développement web.
        <br />
        J'ai désormais à coeur de mettre à profit toutes mes compétences pour
        vous accompagner dans vos projets.
      </p>
    </header>
  );
};

export default IntroSection;
