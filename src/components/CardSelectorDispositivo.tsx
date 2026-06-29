import BaseCardDispositivo from "./BaseCardDispositivo";

import type { Dispositivo } from "../domain/Dispositivo";

import "../styles/CardSelectorDispositivo.css";

type Props={

  dispositivo:Dispositivo;

  seleccionado:boolean;

  onSeleccionar:()=>void;

};

function CardSelectorDispositivo({

  dispositivo,

  seleccionado,

  onSeleccionar

}:Props){

  return(

    <BaseCardDispositivo

      dispositivo={dispositivo}

    >

      <button

        className={

          seleccionado

          ? "btn-seleccionado"

          : "btn-seleccionar"

        }

        onClick={onSeleccionar}

      >

        {

          seleccionado

          ? "Seleccionado"

          : "Agregar"

        }

      </button>

    </BaseCardDispositivo>

  );

}

export default CardSelectorDispositivo;