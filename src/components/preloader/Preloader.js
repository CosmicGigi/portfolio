import React, { useEffect } from "react";
import { preLoaderAnim } from "./PreloaderAnim";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const cleanup = preLoaderAnim(setLoading);
    return cleanup; // Assure que l'écouteur d'événement est nettoyé
  }, [setLoading]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>COSMIC GIGI</span>
        <span className="selfdefinition">
          Créativité, Modernité, Performance
        </span>
      </div>
    </div>
  );
};

export default Preloader;
