import { useState, useEffect } from "react";
import Boton from "../components/Boton";
import Header from "../components/Header";
import FormularioEscena from "../components/FormularioEscenas";
import { Escena } from "../domain/Escena";
import "../styles/Layout.css";

function Escenas() {
  // 🔹 Cargar desde localStorage
  const [escenas, setEscenas] = useState<Escena[]>(() => {
    const data = localStorage.getItem("escenas");

    if (!data) return [];

    const parsed = JSON.parse(data);
    return parsed.map((e: any) => Escena.fromJSON(e));
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // 🔹 Guardar automáticamente
  useEffect(() => {
    localStorage.setItem("escenas", JSON.stringify(escenas));
  }, [escenas]);

  // 🔹 Crear escena
  const agregarEscena = (nombre: string) => {
    const nueva = new Escena(nombre);
    setEscenas([...escenas, nueva]);
    setMostrarFormulario(false);
  };

  return (
    <div className="layout">

      <Header titulo="ESCENAS" />

      <div className="contenedor layout-seguridad">

        {/* ESCENAS */}
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