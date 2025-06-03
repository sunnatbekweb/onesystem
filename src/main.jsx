import React from "react";
import "./assets/css/fonts.css";
import "./assets/css/style.css";
import "./assets/css/tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouteProvider from "./providers/RouteProvider";
import Router from "./router/router";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider>
      <Router />
    </RouteProvider>
  </StrictMode>
)