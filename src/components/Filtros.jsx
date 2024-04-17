 import React from 'react';

const Filtros = ({ filtrarPorPerdidos, filtrarPorGanadores, filtrarPorDocumento }) => {
  return (
    <div>
      <h2>Filtros</h2>
      <button onClick={filtrarPorPerdidos}>Perdidos</button>
      <button onClick={filtrarPorGanadores}>Ganadores</button>
      <label>
        Filtrar por Documento:
        <input type="text" onChange={filtrarPorDocumento} />
      </label>
    </div>
  );
};

export default Filtros;