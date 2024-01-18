import React, { useState, useEffect } from "react";
import Meta from "./Meta";

const ListaMetas = () => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    // Obtener las metas del servidor o del estado
  }, []);

  return (
    <ul>
      {metas.map((meta) => (
        <li key={meta.id}>
          <Meta meta={meta} />
        </li>
      ))}
    </ul>
  );
};

export default ListaMetas;