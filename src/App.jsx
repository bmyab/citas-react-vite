import { useState , useEffect } from 'react';
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente , setPaciente] = useState([]);

  useEffect(()=>{
    // console.log('Componente listo o cambio pacientes')
    //Guarda el arreglo de pacientes de manera local
      localStorage.setItem('pacientes' , JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id)=>{
    console.log('Eliminando paciente' , id)

    const pacienteFiltrado = pacientes.filter(pac => pac.id !==id )
    setPacientes(pacienteFiltrado)
  }

  return (
    <div className="container max-w-7xl mx-auto mt-5 pb-5 px-4">
      <Header />
      <div className="mt-8 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
         />
      </div>
    </div>
  );
}

export default App;
