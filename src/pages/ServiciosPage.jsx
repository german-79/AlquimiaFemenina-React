import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import ServDoula from "../assets/img/ServiciosDoula.svg"; 
import ServPueri from "../assets/img/ServiciosPueri.svg";
import ServRU from "../assets/img/ServiciosRitual.svg"; 
import ServMTC from "../assets/img/ServiciosMTC.svg"; 

// tengo que importar las imagenes y reemplazarlas por el nombre entre llaves en el src


function ServiciosPage() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h1>Servicios</h1>

          <article>
            <img src={ServDoula} alt="Doula" />
            <h2>Doula</h2>
            <p>
              Acompañamiento emocional y físico antes, durante y después del
              parto.
            </p>
            <ul className="servicio">
              <li>Menos intervenciones médicas</li>
              <li>Contención emocional</li>
              <li>Empoderamiento de la persona gestante</li>
            </ul>
          </article>

          <article>
            <img src={ServPueri} alt="Puericultura" />
            <h2>Puericultura</h2>
            <p>
              Asesoramiento personalizado en lactancia, sueño y crianza
              respetuosa.
            </p>
            <ul className="servicio">
              <li>Apoyo práctico en la crianza</li>
              <li>Herramientas para lactancia exitosa</li>
              <li>Guía en rutinas de sueño</li>
            </ul>
          </article>

          <article>
            <img
              src={ServRU} alt="Rituales de Útero"
            />
            <h2>Rituales de Sanación de Útero</h2>
            <p>
              Ceremonias energéticas para honrar, sanar y reconectar con el
              útero como centro de creación y sabiduría.
            </p>
            <ul className="servicio">
              <li>Liberación emocional</li>
              <li>Empoderamiento femenino</li>
              <li>Conexión ancestral</li>
            </ul>
          </article>

          <article>
            <img src={ServMTC} alt="Medicina China" />
            <h2>Medicina Tradicional China</h2>
            <p>
              Terapias energéticas para restaurar el equilibrio del cuerpo y la
              mente.
            </p>
            <ul className="servicio">
              <li>Mejora la circulación</li>
              <li>Reduce el estrés</li>
              <li>Equilibra órganos internos</li>
            </ul>
          </article>
        </section>

        <div className="formularioLink">
          <p>¿Querés hacer una consulta?</p>
          <Link to="/formulario" className="formularioLink">
            <i className="fas fa-paper-plane"></i> Completá el formulario acá
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServiciosPage;
