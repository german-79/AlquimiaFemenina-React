import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FormularioPage () {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    dni: "",
    consulta: "",
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    alert("¡Gracias! Tu consulta fue enviada correctamente.");
    setFormData({
      nombre: "",
      apellido: "",
      correo: "",
      celular: "",
      dni: "",
      consulta: "",
    });
  };

  return (
    <>
      <Header />

      <main>
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form
                onSubmit={enviarFormulario}
                className="p-4 bg-light rounded shadow"
              >
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="nombre@ejemplo.com"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="celular" className="form-label">
                    Celular
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="celular"
                    placeholder="1144445555"
                    value={formData.celular}
                    onChange={handleChange}
                  />
                  <div id="celularAyuda" className="form-text">
                    Ingresá tu número con código de área sin 0 ni 15
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="dni" className="form-label">
                    DNI
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dni"
                    value={formData.dni}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="consulta" className="form-label">
                    Consulta
                  </label>
                  <textarea
                    className="form-control"
                    id="consulta"
                    rows="4"
                    placeholder="Escribí tu consulta aquí..."
                    value={formData.consulta}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FormularioPage;
