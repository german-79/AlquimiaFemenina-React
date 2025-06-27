import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroPortada from "../assets/img/heroPortada.svg";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h1 className="fadeIn">Bienvenida al sitio</h1>
          <p>
            Bienvenida a Alquimia Femenina, un espacio creado para acompañarte
            en tu proceso de reconexión, empoderamiento y expansión. Creemos en
            la fuerza cíclica de lo femenino, en el poder de los rituales, y en
            la belleza de volver a habitarte desde la intuición, la naturaleza y
            el amor propio.
            <br />
            <br />
            Este es un refugio para que te explores, te escuches y te
            transformes.
          </p>
        </section>

        <section>
          <h3>Aquí comienza tu viaje hacia la transformación</h3>
          <div>
            <img src={HeroPortada} alt="heroPortada" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
