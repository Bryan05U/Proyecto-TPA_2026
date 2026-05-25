import { DispositivoSeguridad } from "../domain/DispositivoSeguridad";

// Importando iconos de botones
import IconoCamara from "../assets/Seguridad/Logo_Camara.svg?react";
import IconoVentana from "../assets/Seguridad/Logo_Camara.svg?react";
import IconoPuerta from "../assets/Seguridad/Logo_Puerta.svg?react";
import IconoTemperatura from "../assets/Seguridad/Logo_Temperatura.svg?react";

// Importando iconos de interacción
import IconoEditar from "../assets/Botones/Logo_Editar.svg?react";
import IconoBorrar from "../assets/Botones/Logo_Borrar.svg?react";

import "../styles/Boton.css"
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

      {/* NOMBRE */}
      <h2 className="nombre-dispositivo">

        {dispositivo.nombre}

      </h2>

      {/* ICONO */}
      <div className="icono-dispositivo">

        {dispositivo.tipo === "camaras" &&
          <IconoCamara />
        }

        {dispositivo.tipo === "ventanas" &&
          <IconoVentana />
        }

        {dispositivo.tipo === "puertas" &&
          <IconoPuerta />
        }

        {dispositivo.tipo === "temperatura" &&
          <IconoTemperatura />
        }

      </div>

      {/* SWITCH */}
      <label className="switch">

        <input
          type="checkbox"
          checked={dispositivo.activo}
          onChange={onToggle}
        />

        <span className="slider"></span>

      </label>

      {/* PANEL ACCIONES */}
      <div className="panel-acciones">

        {/* EDITAR */}
        <button
          className="accion-btn"
          onClick={onEditar}
        >
          <IconoEditar />
        </button>

        {/* ELIMINAR */}
        <button
          className="accion-btn"
          onClick={onEliminar}
        >
          <IconoBorrar />
        </button>

      </div>

    </div>
  );
}

export default CardDispositivo;