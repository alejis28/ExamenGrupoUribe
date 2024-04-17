import React from 'react';

const ListaEstudiantes = ({ estudiantes }) => {
  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {estudiante.nombre} - <strong>Documento:</strong> {estudiante.documento} - <strong>Nota Final:</strong> {estudiante.notaFinal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEstudiantes;