import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CustomCursor from "./components/CustomCursor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <CustomCursor /> */}
    <App />
  </React.StrictMode>
);
