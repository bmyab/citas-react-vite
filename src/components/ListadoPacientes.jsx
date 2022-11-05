import React  from "react";
import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes , setPaciente , eliminarPaciente }) => {

 
  return (
    <div className="md:w-1/2 lg:w-3/5 pt-5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-center text-3xl">ListadoPacientes</h2>
          <p className="text-lg text-center mt-4">
            Administra tus {""}
            <span className="text-indigo-600 font-semibold">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((pac) => (
            <Pacientes 
              key={pac.id} 
              paciente={pac} 
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
              />
          ))}
        </>
      ) : (
        <>
        <h2 className="font-bold text-center text-3xl">Sin registros</h2>
        <p className="text-lg text-center mt-4">
            Ingrese su registro de {""}
            <span className="text-indigo-600 font-semibold">
              Pacientes y Citas
            </span>
        </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
