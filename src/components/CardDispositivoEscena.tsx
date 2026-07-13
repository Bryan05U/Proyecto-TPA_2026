import BaseCardDispositivo from "./BaseCardDispositivo";

import type { DispositivoEscena } from "../domain/DispositivoEscena";

import IconoBorrar from "../assets/Botones/Logo_Borrar.svg?react";

import "../styles/CardDispositivoEscena.css";

type Props={

  dispositivo:DispositivoEscena;

  onToggle:()=>void;

  onEliminar:()=>void;

};

function CardDispositivoEscena({

  dispositivo,

  onToggle,

  onEliminar

}:Props){

  return(

    <BaseCardDispositivo

      dispositivo={dispositivo}

    >

      <label className="switch">

        <input

          type="checkbox"

          checked={dispositivo.activo}

          onChange={onToggle}

        />

        <span className="slider"></span>

      </label>

      <button

        className="accion-btn"

        onClick={onEliminar}

      >

        <IconoBorrar/>

      </button>

    </BaseCardDispositivo>

  );

}

export default CardDispositivoEscena;