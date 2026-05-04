import { useState } from "react";
import Boton from "../components/Boton";
import "../styles/Layout.css";
import Header from "../components/Header";
import FormularioEscena from "../components/FormularioEscenas";
import { Escena } from "../domain/Escena";

function Escenas() {
  const [escenas, setEscenas] = useState<Escena[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarEscena = (nombre: string) => {
    const nueva = new Escena(nombre);
    setEscenas([...escenas, nueva]);
    setMostrarFormulario(false);
  };

  return (
    <div className="layout">

      <Header titulo="ESCENAS" />

      <div className="contenedor layout-seguridad">

        {/* ESCENAS EXISTENTES */}
        {escenas.map((escena, index) => (
          <Boton
            key={index}
            nombre={escena.nombre}
            onClick={() => {}}
            classNameExtra="boton-seguridad"
          />
        ))}

        {/* BOTÓN CREAR */}
        <Boton
          nombre="+ Nueva escena"
          onClick={() => setMostrarFormulario(true)}
          classNameExtra="boton-seguridad"
        />

      </div>

      {/* FORMULARIO */}
      {mostrarFormulario && (
        <FormularioEscena
          onCrear={agregarEscena}
          onCerrar={() => setMostrarFormulario(false)}
        />
      )}

    </div>
  );
}

export default Escenas;