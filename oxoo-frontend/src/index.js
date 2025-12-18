import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.css";
import "./styles/home.css";
import "./components/Navbar.css";
import "./components/IslandsPreview.css";
import "./components/VoiceAssistant.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);