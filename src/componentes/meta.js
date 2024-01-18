import React, { useState, useEffect } from "react";

import Meta from "./Meta";

const Meta = ({ meta }) => {
  const [estado, setEstado] = useState("pendiente");

  const handleClickCompletar = () => {
    setEstado("completada");
  };

  const handleClickEliminar = () => {
    
  };

  return (
    <div className="meta">
      <h3 className="meta-titulo">{meta.titulo}</h3>
      <p className="meta-descripcion">{meta.descripcion}</p>
      <div className="meta-estado">
        <button
          className={`meta-estado-boton ${estado === "completada" ? "verde" : ""}`}
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