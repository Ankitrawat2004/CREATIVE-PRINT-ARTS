import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PrintingHome from "./PrintingHome.jsx";
import "./printing.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrintingHome />
  </StrictMode>,
);
