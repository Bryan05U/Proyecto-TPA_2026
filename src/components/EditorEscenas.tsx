import { useState } from "react";

import { Escena } from "../domain/Escena";
import { DispositivoEscena } from "../domain/DispositivoEscena";

import CardDispositivoEscena from "./CardDispositivoEscena";
import SelectorDispositivos from "./SelectorDispositivos.tsx";

import IconoEscena from "../assets/Botones/Logo_Escena.svg?react";

import "../styles/EditorEscena.css";

type Props={

  escena?:Escena;

  onGuardar:(escena:Escena)=>void;

  onCancelar:()=>void;

};

function EditorEscena({

  escena,

  onGuardar,

  onCancelar

}:Props){

  const[escenaEditada,setEscenaEditada]=useState(

    escena?.clonar()??

    new Escena(

      "Nueva escena",

      []

    )

  );

  const[mostrarSelector,setMostrarSelector]=useState(false);

  const cambiarNombre=(

    nombre:string

  )=>{

    const copia=

      escenaEditada.clonar();

    copia.cambiarNombre(

      nombre

    );

    setEscenaEditada(

      copia

    );

  };

  const actualizarDispositivos=(

    dispositivos:DispositivoEscena[]

  )=>{

    const copia=

      escenaEditada.clonar();

    copia.dispositivos=

      dispositivos;

    setEscenaEditada(

      copia

    );

    setMostrarSelector(

      false

    );

  };

  const quitarDispositivo=(

    dispositivo:DispositivoEscena

  )=>{

    const copia=

      escenaEditada.clonar();

    copia.quitarDispositivo(

      dispositivo

    );

    setEscenaEditada(

      copia

    );

  };

  const toggle=(

    dispositivo:DispositivoEscena

  )=>{

    const copia=

      escenaEditada.clonar();

    copia.toggleDispositivo(

      dispositivo.nombre,

      dispositivo.tipo

    );

    setEscenaEditada(

      copia

    );

  };

  return(

    <>

      <div className="overlay">

        <div className="editor-escena">

          <button

            className="btn-cerrar"

            onClick={onCancelar}

          >

            ✕

          </button>

          <div className="editor-header">

            <div className="editor-icono">

              <IconoEscena/>

            </div>

            <div className="editor-info">

              <input

                className="editor-nombre"

                value={escenaEditada.nombre}

                onChange={e=>

                  cambiarNombre(

                    e.target.value

                  )

                }

              />

              <button

                className="btn-listo"

                onClick={()=>

                  onGuardar(

                    escenaEditada

                  )

                }

              >

                LISTO

              </button>

            </div>

          </div>

          <div className="editor-dispositivos">

            {

              escenaEditada.dispositivos.length===0

              ?

              <div className="sin-dispositivos">

                No hay dispositivos agregados.

              </div>

              :

              escenaEditada.dispositivos.map(

                dispositivo=>

                  <CardDispositivoEscena

                    key={

                      dispositivo.nombre+

                      dispositivo.tipo

                    }

                    dispositivo={

                      dispositivo

                    }

                    editable

                    onToggle={()=>

                      toggle(

                        dispositivo

                      )

                    }

                    onEliminar={()=>

                      quitarDispositivo(

                        dispositivo

                      )

                    }

                  />

              )

            }

          </div>

          <div

            className="card-agregar"

            onClick={()=>setMostrarSelector(true)}

          >

            <div className="card-agregar-mas">

              +

            </div>

            <div>

              Agregar dispositivo

            </div>

          </div>

        </div>

      </div>

      {

        mostrarSelector&&

        <SelectorDispositivos

          seleccionados={

            escenaEditada.dispositivos

          }

          onAceptar={

            actualizarDispositivos

          }

          onCancelar={()=>

            setMostrarSelector(

              false

            )

          }

        />

      }

    </>

  );

}

export default EditorEscena;