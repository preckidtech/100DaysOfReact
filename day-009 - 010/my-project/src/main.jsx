import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Pizza from "../../Component/Pizza.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pizza />
  </StrictMode>
);
