import BaseCardDispositivo from "./BaseCardDispositivo";

import { Dispositivo } from "../domain/Dispositivo";

import IconoEditar from "../assets/Botones/Logo_Editar.svg?react";
import IconoBorrar from "../assets/Botones/Logo_Borrar.svg?react";

import "../styles/CardDispositivo.css";

type Props={

  dispositivo:Dispositivo;

  onToggle:()=>void;

  onEditar:()=>void;

  onEliminar:()=>void;

};

function CardDispositivo({

  dispositivo,

  onToggle,

  onEditar,

  onEliminar

}:Props){

  return(

    <BaseCardDispositivo

      dispositivo={dispositivo}

      acciones={

        <>

          <button

            className="accion-btn"

            onClick={onEditar}

          >

            <IconoEditar/>

          </button>

          <button

            className="accion-btn"

            onClick={onEliminar}

          >

            <IconoBorrar/>

          </button>

        </>

      }

    >

      <label className="switch">

        <input

          type="checkbox"

          checked={dispositivo.activo}

          onChange={onToggle}

        />

        <span className="slider"></span>

      </label>

    </BaseCardDispositivo>

  );

}

export default CardDispositivo;