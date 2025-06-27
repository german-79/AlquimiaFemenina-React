import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/" className="volver-inicio">
        {" "}
        Volver al inicio{" "}
      </Link>
    </div>
  );
}
