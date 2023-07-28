import Home from "./pages/Home";
import Loading from "./components/Loading";
import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      <Home isLoading={isLoading} />
    </>
  );
};

export default App;
