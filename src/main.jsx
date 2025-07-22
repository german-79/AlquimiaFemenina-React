import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import InstitucionalPage from "./pages/InstitucionalPage.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx";
import TiendaPage from "./pages/TiendaPage.jsx";
import FormularioPage from "./pages/FormularioPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="institucional" element={<InstitucionalPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="tienda" element={<TiendaPage />} />
          <Route path="formulario" element={<FormularioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
