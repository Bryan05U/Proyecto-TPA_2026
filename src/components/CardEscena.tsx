import { Escena } from "../domain/Escena";

import { obtenerIconoDispositivo } from "../utils/IconosDispositivos";

import IconoEditar from "../assets/Botones/Logo_Editar.svg?react";
import IconoBorrar from "../assets/Botones/Logo_Borrar.svg?react";
import IconoEscena from "../assets/Botones/Logo_Escena.svg?react";

import "../styles/CardEscena.css";

type Props={

  escena:Escena;

  onToggle:()=>void;

  onEditar:()=>void;

  onEliminar:()=>void;

};

function CardEscena({

  escena,

  onToggle,

  onEditar,

  onEliminar

}:Props){

  const activa = escena.estaActiva();

  return(

    <div className="card-escena">

      <div className="card-escena-header">

        <h2>

          {escena.nombre}

        </h2>

      </div>

      <div className="card-escena-icono">

        <IconoEscena/>

      </div>

      <div className="card-escena-info">

        {escena.dispositivos.length} dispositivo{

          escena.dispositivos.length!==1&&"s"

        }

      </div>

      <div className="card-escena-preview">

        {

          escena.dispositivos

          .slice(

            0,

            4

          )

          .map(

            dispositivo=>

              <div

                key={

                  dispositivo.nombre+

                  dispositivo.tipo

                }

                className="preview-icono"

              >

                {

                  obtenerIconoDispositivo(

                    dispositivo.tipo

                  )

                }

              </div>

          )

        }

      </div>

      <button

        className={

          activa

          ?

          "btn-ejecutar activo"

          :

          "btn-ejecutar"

        }

        onClick={onToggle}

      >

        {

          activa

          ?

          "ACTIVA"

          :

          "EJECUTAR"

        }

      </button>

      <div className="card-escena-acciones">

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

      </div>

    </div>

  );

}

export default CardEscena;