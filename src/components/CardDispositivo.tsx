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

    <div className="card-dispositivo">

      {/* BOTÓN */}
      <button
        className={`
          dispositivo-btn
          ${dispositivo.activo
            ? "activo"
            : "desactivado"}
        `}
        onClick={onToggle}
      >

        <h2>
          {dispositivo.nombre}
        </h2>

      </button>

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
          Editar
        </button>

        {/* ELIMINAR */}
        <button
          className="accion-btn"
          onClick={onEliminar}
        >
          Eliminar
        </button>

      </div>

    </div>
  );
}

export default CardDispositivo;