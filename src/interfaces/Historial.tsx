import { useEffect,useState } from "react";

import Header from "../components/Header";
import Confirmacion from "../components/Confirmacion";

import { HistorialEvento } from "../domain/HistorialEvento";

import { HistorialService } from "../services/HistorialService";
import { DispositivosService } from "../services/DispositivosService";

import IconoBorrar from "../assets/Botones/Logo_Borrar.svg?react";
import IconoRevertir from "../assets/Botones/Logo_Revertir.svg?react";
import FlechaDerecha from "../assets/Historial/Logo_Flecha_Derecha.svg?react";
import FlechaAbajo from "../assets/Historial/Logo_Flecha_Abajo.svg?react";

import "../styles/Historial.css";

function Historial(){

  const[eventos,setEventos]=useState<HistorialEvento[]>([]);

  const[expandidos,setExpandidos]=
    useState<number[]>([]);

  const[mostrarConfirmacion,setMostrarConfirmacion]=
    useState(false);

  useEffect(()=>{

    cargarEventos();

  },[]);

  const cargarEventos=()=>{

    setEventos(

      HistorialService.obtener()

    );

  };

  const borrarHistorial=()=>{

    HistorialService.limpiar();

    setEventos([]);

    setMostrarConfirmacion(false);

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

    dispositivo.cambiarEstadoSinNotificacion(

      !dispositivo.activo

    );

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

  const toggleExpandido=(

    index:number

  )=>{

    if(

      expandidos.includes(index)

    ){

      setExpandidos(

        expandidos.filter(

          i=>i!==index

        )

      );

    }

    else{

      setExpandidos([

        ...expandidos,

        index

      ]);

    }

  };

  return(

    <div className="layout">

      <Header titulo="HISTORIAL"/>

      <div className="historial-acciones">

        <button

          className="btn-borrar-historial"

          onClick={()=>

            setMostrarConfirmacion(true)

          }

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

                className={

                  evento.dispositivoTipo==="escena"

                  ?

                  "historial-card expandible"

                  :

                  "historial-card"

                }

                onClick={()=>{

                  if(

                    evento.dispositivoTipo===

                    "escena"

                  ){

                    toggleExpandido(index);

                  }

                }}

              >

                <div>

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

                      <div className="historial-escena-titulo">

                        <span className="flecha-expandir">

                          {
                            expandidos.includes(index)
                            ?
                            <FlechaAbajo/>
                            :
                            <FlechaDerecha/>
                          }

                        </span>

                        <span className="historial-escena-texto">

                          La escena <strong>{evento.dispositivoNombre}</strong> fue {evento.accion} a las {evento.fecha}

                        </span>

                      </div>

                      :

                      <>

                        El dispositivo <strong>{evento.dispositivoNombre}</strong> fue {evento.accion} a las {evento.fecha}

                      </>

                    }

                  </span>

                  {

                    evento.dispositivoTipo==="escena"

                    &&

                    expandidos.includes(index)

                    &&

                    <div className="historial-detalles">

                      {

                        evento.detalles.map(

                          (detalle,i)=>

                            <div

                              key={i}

                              className="detalle"

                            >

                              • {detalle.nombre} → {detalle.accion}

                            </div>

                        )

                      }

                    </div>

                  }

                </div>

                {

                  evento.dispositivoTipo!=="escena"&&

                  evento.accion!=="revertido"&&

                  <button

                    className="btn-revertir"

                    onClick={(e)=>{

                      e.stopPropagation();

                      revertir(evento);

                    }}

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

      {

        mostrarConfirmacion&&

        <Confirmacion

          titulo="Borrar historial"

          mensaje="¿Seguro que deseas borrar todo el historial?"

          onAceptar={

            borrarHistorial

          }

          onCancelar={()=>

            setMostrarConfirmacion(

              false

            )

          }

        />

      }

    </div>

  );

}

export default Historial;