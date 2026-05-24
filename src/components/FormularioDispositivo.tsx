import { useState } from "react";

import "../styles/FormularioDispositivo.css";

type Props = {

  onCrear: (nombre: string) => void;

  onCerrar: () => void;
};

function FormularioDispositivo({

  onCrear,

  onCerrar

}: Props) {

  const [nombre, setNombre] =
    useState("");

  const handleCrear = () => {

    if (nombre.trim() === "")
      return;

    onCrear(nombre);

    setNombre("");
  };

  return (

    <div className="overlay">

      <div className="formulario-dispositivo">

        {/* BOTÓN CERRAR */}
        <button
          className="btn-cerrar"
          onClick={onCerrar}
        >
          ✕
        </button>

        <h2>
          Nuevo Dispositivo
        </h2>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Nombre del dispositivo"
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
        />

        {/* BOTONES */}
        <div className="acciones-formulario">

          <button
            className="btn-formulario"
            onClick={handleCrear}
          >
            CREAR
          </button>

        </div>

      </div>

    </div>
  );
}

export default FormularioDispositivo;