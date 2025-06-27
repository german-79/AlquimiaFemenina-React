import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//importa las imagenes de las tajetas
import Doula from "../assets/img/Doula.svg";
import Pueri from "../assets/img/Pueri.svg";
import MTC from "../assets/img/MTC.svg";

//importo las imagenes de la galeria
import galeria1 from "../assets/img/galeria/galeria1.png";
import galeria2 from "../assets/img/galeria/galeria2.png";
import galeria3 from "../assets/img/galeria/galeria3.png";
import galeria4 from "../assets/img/galeria/galeria4.png";
import galeria5 from "../assets/img/galeria/galeria5.png";
import galeria6 from "../assets/img/galeria/galeria6.png";
import galeria7 from "../assets/img/galeria/galeria7.png";
import galeria8 from "../assets/img/galeria/galeria8.png";
import galeria9 from "../assets/img/galeria/galeria9.png";

function InstitucionalPage() {
  const imagenesGaleria = [
    galeria1,
    galeria2,
    galeria3,
    galeria4,
    galeria5,
    galeria6,
    galeria7,
    galeria8,
    galeria9,
  ];

  return (
    <>
      <Header />

      <main>
        <h1>Sobre nosotras</h1>
        <section>
          <h2>Sobre mí</h2>
          <p>
            Hola, soy Emilse, madre de tres hijos... (copiá todo este bloque del
            texto estático)
          </p>
          <p>Hoy te invito a recorrer juntas este camino, desde el corazón.</p>
        </section>
        <section className="tarjetas-detalle">
          <div className="tarjeta">
            <img src={Doula} alt="Doula" />
            <h3>Doula</h3>
            <p>
              Acompañamiento emocional, físico y espiritual durante el
              embarazo...
            </p>
          </div>
          <div className="tarjeta">
            <img src={Pueri} alt="Puericultura" />
            <h3>Puericultura</h3>
            <p>Asesoramiento en lactancia, sueño y crianza respetuosa...</p>
          </div>
          <div className="tarjeta">
            <img src={MTC} alt="MTC" />
            <h3>Medicina Tradicional China</h3>
            <p>Tratamientos integrales desde la sabiduría ancestral china...</p>
          </div>
        </section>

        <section>
          <h2>Nosotras en acción</h2>

          <div className="galeria">
            {imagenesGaleria.map((img, i) => (
              <a key={i} href={`#galeria${i + 1}`} className="galeria-item">
                <img src={img} alt={`Galería ${i + 1}`} />
              </a>
            ))}
          </div>

          {/* Modales de galería */}
          {imagenesGaleria.map((img, i) => (
            <div key={i} className="abreImg" id={`galeria${i + 1}`}>
              <a href="#" className="cerrar">
                <i className="fa-solid fa-xmark"></i>
              </a>
              <img src={img} alt={`Galería ${i + 1}`} />
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default InstitucionalPage;
