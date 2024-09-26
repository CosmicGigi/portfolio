import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { home } from "./routes";
import Home from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
