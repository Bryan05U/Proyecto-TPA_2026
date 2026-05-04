import { useState } from "react";
import "../styles/FormularioEscenas.css";

type Props = {
  onCrear: (nombre: string) => void;
  onCerrar: () => void;
};

function FormularioEscena({ onCrear, onCerrar }: Props) {
  const [nombre, setNombre] = useState("Nueva Escena");

  const handleCrear = () => {
    if (nombre.trim() === "") return;
    onCrear(nombre);
    setNombre("");
  };

  return (
    <div className="overlay">
      <div className="formulario-card">

        <button className="btn-cerrar" onClick={onCerrar}>
          ✕
        </button>

        <div className="formulario-contenido">

          {/* IZQUIERDA (ICONO) */}
          <div className="icono-grande">
            <div className="placeholder-icono"></div>
          </div>

          <div className="contenido">

            <div className="top">
              <input
                className="input-nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <button className="btn-listo" onClick={handleCrear}>
                LISTO
              </button>
            </div>

            <div className="bottom">
              <button className="btn-agregar">+</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default FormularioEscena;