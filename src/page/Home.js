import React, { useState } from "react";
import Main from "../components/Main";
import Preloader from "../components/preloader/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>{loading ? <Preloader setLoading={setLoading} /> : <Main />}</div>
  );
};

export default Home;
