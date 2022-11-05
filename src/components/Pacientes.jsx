import React from "react";

const Pacientes = ({paciente , setPaciente , eliminarPaciente}) => {

  const handleEliminar =()=>{
    const respuesta  = confirm('¿Deseas eliminar este registro?')

    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }
  return (
    <div className="mt-8 ml-3 px-4 py-8 rounded-lg  bg-white shadow">
      <p className="font-bold mb-3 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          {paciente.sintomas}
        </span>
      </p>

      <div className="flex gap-4">
        <button
          onClick={ ()=> setPaciente(paciente)}
          className="py-1 px-5 rounded bg-blue-600 hover:bg-blue-700 font-semibold text-white cursor-pointer">Editar</button>
        <button
          onClick={ handleEliminar }
          className="py-1 px-4 rounded bg-red-500 hover:bg-red-600 font-semibold text-white cursor-pointer">Eliminar</button>
      </div>
    </div>
  );
};

export default Pacientes;
