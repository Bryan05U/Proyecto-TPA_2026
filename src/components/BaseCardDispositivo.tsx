import type { ReactNode } from "react";

import { Dispositivo } from "../domain/Dispositivo";
import { DispositivoEscena } from "../domain/DispositivoEscena";

import { obtenerIconoDispositivo } from "../utils/IconosDispositivos";

import "../styles/BaseCardDispositivo.css";

type Props={

  dispositivo:Dispositivo|DispositivoEscena;

  acciones?:ReactNode;

  children?:ReactNode;

};

function BaseCardDispositivo({

  dispositivo,

  acciones,

  children

}:Props){

  return(

    <div className="base-card-dispositivo">

      <div className="base-card-nombre">

        {dispositivo.nombre}

      </div>

      <div className="base-card-header-acciones">

        {acciones}

      </div>

      <div className="base-card-icono">

        {obtenerIconoDispositivo(dispositivo.tipo)}

      </div>

      <div className="base-card-contenido">

        {children}

      </div>

    </div>

  );

}

export default BaseCardDispositivo;