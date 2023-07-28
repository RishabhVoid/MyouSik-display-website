import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Versions from "./pages/Versions";
import Loading from "./components/Loading";

const App = () => {
  return (
    <>
      <Loading />
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
