import { useEffect,useState } from "react";

import Header from "../components/Header";

import { HistorialEvento } from "../domain/HistorialEvento";

import { HistorialService } from "../services/HistorialService";
import { DispositivosService } from "../services/DispositivosService";

import IconoBorrar from "../assets/Botones/Logo_Borrar.svg?react";
import IconoRevertir from "../assets/Botones/Logo_Revertir.svg?react";

import "../styles/Historial.css";

function Historial(){

  const[eventos,setEventos]=useState<HistorialEvento[]>([]);

  useEffect(()=>{

    cargarEventos();

  },[]);

  const cargarEventos=()=>{

    setEventos(

      HistorialService.obtener()

    );

  };

  const borrarHistorial=()=>{

    if(

      !confirm(

        "¿Seguro que quieres borrar todo el historial?"

      )

    )return;

    HistorialService.limpiar();

    setEventos([]);

  };

  const revertir=(evento:HistorialEvento)=>{

    const dispositivos=

      DispositivosService.obtener(

        evento.dispositivoTipo

      );

    const dispositivo=

      dispositivos.find(

        d=>

          d.nombre===evento.dispositivoNombre&&

          d.tipo===evento.dispositivoTipo

      );

    if(!dispositivo)return;

    dispositivo.toggle();

    DispositivosService.guardar(

      evento.dispositivoTipo,

      dispositivos

    );

    HistorialService.agregar(

      dispositivo.nombre,

      dispositivo.tipo,

      "revertido"

    );

    cargarEventos();

  };

  return(

    <div className="layout">

      <Header titulo="HISTORIAL"/>

      <div className="historial-acciones">

        <button

          className="btn-borrar-historial"

          onClick={borrarHistorial}

          title="Borrar historial"

        >

          <IconoBorrar/>

        </button>

      </div>

      <div className="historial-container">

        {

          eventos.map(

            (evento,index)=>(

              <div

                key={index}

                className="historial-card"

              >

                <span>

                  {

                    evento.accion==="revertido"

                    ?

                    <>

                      Se revirtió el estado del dispositivo <strong>{evento.dispositivoNombre}</strong> a las {evento.fecha}

                    </>

                    :

                    evento.dispositivoTipo==="escena"

                    ?

                    <>

                      La escena <strong>{evento.dispositivoNombre}</strong> fue {evento.accion} a las {evento.fecha}

                    </>

                    :

                    <>

                      El dispositivo <strong>{evento.dispositivoNombre}</strong> fue {evento.accion} a las {evento.fecha}

                    </>

                  }

                </span>

                {

                  evento.dispositivoTipo!=="escena"&&

                  evento.accion!=="revertido"&&

                  <button

                    className="btn-revertir"

                    onClick={()=>revertir(evento)}

                    title="Revertir"

                  >

                    <IconoRevertir/>

                  </button>

                }

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default Historial;