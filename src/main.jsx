import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ClubWebsite from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClubWebsite />
  </React.StrictMode>
);
