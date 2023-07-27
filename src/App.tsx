import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Versions from "./pages/Versions";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/versions" element={<Versions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
