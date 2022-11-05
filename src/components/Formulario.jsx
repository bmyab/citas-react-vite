import React from "react";
import { useState , useEffect } from "react";

const Formulario = ({ pacientes, setPacientes, paciente ,setPaciente }) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
 

  useEffect(() => {
    // Objet key metodo para validar si el objeto viene vacio
    // console.log( Object.keys(paciente).length > 0)
    if(Object.keys(paciente).length > 0){
      const {nombre , email, fecha,sintomas , propietario} = paciente
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
      setNombre(nombre)
    }else{
      // console.log('vacio')
    }
  }, [paciente]);

  const generarId = () => {
    const id = Date.now().toString(36);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      // console.log('Hay al menos un campo vacio')
      return;
    } else {
      setError(false);
      // console.log('Validado')

      // Objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };

      if(paciente.id){
        // console.log('Editando')

        // Editando el registro
        objetoPaciente.id = paciente.id

        // Crear un nuevo arreglo con la actualizacion
        const pacienteUpdate = pacientes.map(
                                  pac=> pac.id === paciente.id ? objetoPaciente: pac)

        setPacientes(pacienteUpdate)
        setPaciente({})

      }else{
        // Nuevo Registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente]);
      }
    }
    // Reiniciar el formulario
    setNombre("");
    setEmail("");
    setFecha("");
    setPropietario("");
    setSintomas("");
    // console.log('Enviando la Informacion')
  };

  const Mensaje = () => {
    return (
      <p className="text-center py-2 mb-3 text-red-500 font-semibold border-red-500 border bg-transparent">
        Todos los campos son obligatorios
      </p>
    );
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 pt-5">
      <h2 className="font-bold text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-4 text-lg text-center mb-8">
        Añade pacientes y {""}{" "}
        <span className="text-indigo-600 font-semibold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-8 px-5"
        onSubmit={handleSubmit}>
        {error && <Mensaje />}

        <div className="flex flex-col gap-2 mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            className="w-full border rounded px-2 py-1"
            type="text"
            placeholder="Ingresa el nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="w-full border rounded px-2 py-1"
            type="text"
            placeholder="Ingresa el nombre"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full border rounded px-2 py-1"
            type="email"
            placeholder="Correo de contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta">
            Alta
          </label>
          <input
            id="alta"
            className="w-full border rounded px-2 py-1"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="Sintomas">
            Sintomas
          </label>
          <textarea
            id="Sintomas"
            className="border w-full p-2 mt-2  rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-semibold rounded hover:bg-indigo-700  hover:tracking-wider transition-all cursor-pointer"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
