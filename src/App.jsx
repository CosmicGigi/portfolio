import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
