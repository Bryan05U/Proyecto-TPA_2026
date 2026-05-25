import BaseCard from "./BaseCard";

import { DispositivoSeguridad }
from "../domain/DispositivoSeguridad";

// ICONOS

import IconoCamara from
"../assets/Seguridad/Logo_Camara.svg?react";

import IconoVentana from
"../assets/Seguridad/Logo_Ventana.svg?react";

import IconoPuerta from
"../assets/Seguridad/Logo_Puerta.svg?react";

import IconoTemperatura from
"../assets/Seguridad/Logo_Temperatura.svg?react";

// BOTONES

import IconoEditar from
"../assets/Botones/Logo_Editar.svg?react";

import IconoBorrar from
"../assets/Botones/Logo_Borrar.svg?react";

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

  const renderIcono = () => {

    switch (dispositivo.tipo) {

      case "camaras":
        return <IconoCamara />;

      case "ventanas":
        return <IconoVentana />;

      case "puertas":
        return <IconoPuerta />;

      case "temperatura":
        return <IconoTemperatura />;

      default:
        return null;
    }
  };

  return (

    <BaseCard

      titulo={dispositivo.nombre}

      acciones={
        <>

          <button
            className="accion-btn"
            onClick={onEditar}
          >
            <IconoEditar />
          </button>

          <button
            className="accion-btn"
            onClick={onEliminar}
          >
            <IconoBorrar />
          </button>

        </>
      }

    >

      <div className="contenido-dispositivo">

        <div className="icono-dispositivo">
          {renderIcono()}
        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={dispositivo.activo}
            onChange={onToggle}
          />

          <span className="slider"></span>

        </label>

      </div>

    </BaseCard>
  );
}

export default CardDispositivo;