import React from "react";
import Main from "../components/Main";

const Home = () => {
  return (
    <>
      <head>
        <title>Guillaume Charpentier - Développeur Web</title>
        <meta
          name="description"
          content="Portfolio de Guillaume Charpentier, développeur web passionné. Découvrez mes réalisations, compétences, et contactez-moi pour vos projets web."
        />
        <meta
          name="keywords"
          content="Guillaume Charpentier, développeur web, portfolio, projets, React, Sass"
        />
        <meta name="author" content="Guillaume Charpentier" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Main />
    </>
  );
};

export default Home;
