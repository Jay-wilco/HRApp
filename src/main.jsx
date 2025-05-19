import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ import this
import "./index.css";
import App from "./App.jsx";
// why is this still red?

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ wrap App here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
