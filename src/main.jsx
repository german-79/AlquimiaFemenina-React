import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import InstitucionalPage from "./pages/InstitucionalPage.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx";
import TiendaPage from "./pages/TiendaPage.jsx";
import FormularioPage from "./pages/FormularioPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/institucional", element: <InstitucionalPage /> },
      { path: "/servicios", element: <ServiciosPage /> },
      { path: "/tienda", element: <TiendaPage /> },
      { path: "/formulario", element: <FormularioPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
