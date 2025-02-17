import React, { useState, useEffect } from "react";

const Meta = ({ meta }) => {
  const [estado, setEstado] = useState("pendiente");

  const handleClickCompletar = () => {
    setEstado("completada");
  };

  const handleClickEliminar = () => {
    // Eliminar la meta
  };

  return (
    <div className="meta">
      <h3>{meta.titulo}</h3>
      <p>{meta.descripcion}</p>
      <div className="meta-estado">
        <button
          className={`meta-estado-boton ${estado}`}
          onClick={handleClickCompletar}
        >
          {estado === "pendiente" ? "Completar" : "Completada"}
        </button>
        <button onClick={handleClickEliminar}>Eliminar</button>
      </div>
    </div>
  );
};

export default Meta;