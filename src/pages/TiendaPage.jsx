import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductoCard from "../components/ProductoCard";

function TiendaPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulo carga asincrónica (como si fuera una API) ya que uso .json local
  // hice la prueba con errores en el json y funciona bien el manejo del error
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        // Simulación de fetch de productos.json
        const data = await import("../data/productos.json");
        setProductos(data.default); 
      } catch (err) {
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  const categorias = [...new Set(productos.map((p) => p.categoria))];

  return (
    <>
      <Header />

      <main className="p-4">
        {loading && <p className="text-center">Cargando productos...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading &&
          !error &&
          categorias.map((categoria) => (
            <section key={categoria} className="seccionTienda mb-8">
              <h2 className="text-xl font-semibold mb-4">{categoria}</h2>
              <div className="productos grid grid-cols-1 md:grid-cols-3 gap-4">
                {productos
                  .filter((p) => p.categoria === categoria)
                  .map((producto) => (
                    <ProductoCard
                      key={producto.id}
                      nombre={producto.nombre}
                      descripcion={producto.descripcion}
                      precio={producto.precio}
                    />
                  ))}
              </div>
            </section>
          ))}
      </main>

      <Footer />
    </>
  );
}

export default TiendaPage;
