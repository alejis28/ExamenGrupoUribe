import React, { useState } from 'react';


const RegistroEstudiante = ({ agregarEstudiante }) => {
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [notaFinal, setNotaFinal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEstudiante({ nombre, documento, telefono, direccion, correo, notaFinal });
   
    setDocumento('');
    setTelefono('');
    setDireccion('');
    setCorreo('');
    setNotaFinal('');
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Documento:
        <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
      </label>
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <label>
        Dirección:
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </label>
      <label>
        Correo:
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <label>
        Nota Final:
        <input type="number" min="1" max="5"  value={notaFinal} onChange={(e) => setNotaFinal(e.target.value)} />
      </label>
      <button  type="submit">Registrar Estudiante</button>
    </form>
  );
};

export default RegistroEstudiante;