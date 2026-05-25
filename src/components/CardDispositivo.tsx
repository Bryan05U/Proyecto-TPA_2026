import { DispositivoSeguridad }
from "../domain/DispositivoSeguridad";

import "../styles/CardDispositivo.css";

type Props = {

  dispositivo: DispositivoSeguridad;

  onToggle: () => void;

  onEliminar: () => void;

  onEditar: () => void;
};

function CardDispositivo({

  dispositivo,

  onToggle,

  onEliminar,

  onEditar

}: Props) {

  return (

    <div className={`
      dispositivo-card
      ${dispositivo.activo
        ? "activo"
        : "desactivado"}
    `}>

      {/* ICONO */}
      <div className="icono-dispositivo">

        {dispositivo.tipo === "camaras" && "📷"}

        {dispositivo.tipo === "ventanas" && "🪟"}

        {dispositivo.tipo === "puertas" && "🚪"}

        {dispositivo.tipo === "temperatura" && "🌡️"}

      </div>

      {/* NOMBRE */}
      <h2>
        {dispositivo.nombre}
      </h2>

      {/* ACCIONES */}
      <div className="acciones">

        {/* SWITCH */}
        <label className="switch">

          <input
            type="checkbox"
            checked={dispositivo.activo}
            onChange={onToggle}
          />

          <span className="slider"></span>

        </label>

        {/* EDITAR */}
        <button
          className="accion-btn"
          onClick={onEditar}
        >
          ✏️
        </button>

        {/* ELIMINAR */}
        <button
          className="accion-btn"
          onClick={onEliminar}
        >
          🗑️
        </button>

      </div>

    </div>
  );
}

export default CardDispositivo;