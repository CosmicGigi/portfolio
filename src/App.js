import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { home } from "./routes";
import Home from "./page/Home";
import Preloader from "./components/preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <Routes>
          <Route path={home} element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
