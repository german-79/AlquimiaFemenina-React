import React from "react";

function ProductoCard({ nombre, descripcion, precio }) {
  const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(precio);

  return (
    <div className="productos-item">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <div>
        <p className="precio">Valor: {formatoPrecio}</p>
        <button className="botonCarrito">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductoCard;
