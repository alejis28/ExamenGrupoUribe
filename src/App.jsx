import React, { useState } from 'react';
import RegistroEstudiante from './components/RegistroEstudiante';
import ListaEstudiantes from './components/ListaEstudiantes';
import Filtros from './components/Filtros';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [filtroDocumento, setFiltroDocumento] = useState('');
  const [filtrarPerdidos, setFiltrarPerdidos] = useState(false);
  const [filtrarGanadores, setFiltrarGanadores] = useState(false);


  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  const filtrarPorPerdidos = () => {
    setFiltrarPerdidos(!filtrarPerdidos);
  };


  const filtrarPorGanadores = () => {
    setFiltrarGanadores(!filtrarGanadores);
  };

  const filtrarPorDocumento = (e) => {
    setFiltroDocumento(e.target.value);
  };

  //const estudiantesFiltrados = estudiantes.filter((estudiante) =>
   // estudiante.documento.includes(filtroDocumento)
  //);


  let estudiantesFiltrados = estudiantes;

  if (filtrarPerdidos) {
    estudiantesFiltrados = estudiantesFiltrados.filter((estudiante) => estudiante.notaFinal < 3);
  }

  if (filtrarGanadores) {
    estudiantesFiltrados = estudiantesFiltrados.filter((estudiante) => estudiante.notaFinal >= 3);
  }

  if (filtroDocumento) {
    estudiantesFiltrados = estudiantesFiltrados.filter((estudiante) =>
      estudiante.documento.includes(filtroDocumento)
    );
  }



  return (
    <div>
      <h1>Control de Notas - Profesora Mónica Bibiana</h1>
      <RegistroEstudiante agregarEstudiante={agregarEstudiante} />
      <Filtros
        filtrarPorPerdidos={filtrarPorPerdidos}
        filtrarPorGanadores={filtrarPorGanadores}
        filtrarPorDocumento={filtrarPorDocumento}
      />
      <ListaEstudiantes estudiantes={estudiantesFiltrados} />
    </div>
  );
};

export default App;

