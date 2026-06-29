import { useState } from "react";

import { Dispositivo } from "../domain/Dispositivo";
import { DispositivoEscena } from "../domain/DispositivoEscena";

import { DispositivosService } from "../services/DispositivosService";

import CardSelectorDispositivo from "./CardSelectorDispositivo";

import "../styles/SelectorDispositivos.css";

type Props={

  seleccionados:DispositivoEscena[];

  onAceptar:(dispositivos:DispositivoEscena[])=>void;

  onCancelar:()=>void;

};

function SelectorDispositivos({

  seleccionados,

  onAceptar,

  onCancelar

}:Props){

  const[seleccion,setSeleccion]=useState<DispositivoEscena[]>(

    seleccionados.map(

      d=>d.clonar()

    )

  );

  const contiene=(

    dispositivo:Dispositivo

  )=>{

    return seleccion.some(

      d=>

        d.nombre===dispositivo.nombre&&

        d.tipo===dispositivo.tipo

    );

  };

  const toggle=(

    dispositivo:Dispositivo

  )=>{

    if(

      contiene(

        dispositivo

      )

    ){

      setSeleccion(

        seleccion.filter(

          d=>

            !(

              d.nombre===dispositivo.nombre&&

              d.tipo===dispositivo.tipo

            )

        )

      );

    }

    else{

      setSeleccion([

        ...seleccion,

        new DispositivoEscena(

          dispositivo.nombre,

          dispositivo.tipo,

          dispositivo.activo

        )

      ]);

    }

  };

  return(

    <div className="overlay">

      <div className="selector-card">

        <button

          className="btn-cerrar"

          onClick={onCancelar}

        >

          ✕

        </button>

        <h2>

          Agregar dispositivos

        </h2>

        {

          DispositivosService.categorias.map(

            categoria=>{

              const dispositivos=

                DispositivosService.obtener(

                  categoria

                );

              if(

                dispositivos.length===0

              )return null;

              return(

                <div

                  key={categoria}

                  className="selector-categoria"

                >

                  <h3>

                    {categoria.toUpperCase()}

                  </h3>

                  <div className="selector-grid">

                    {

                      dispositivos.map(

                        dispositivo=>

                          <CardSelectorDispositivo

                            key={

                              dispositivo.nombre+

                              dispositivo.tipo

                            }

                            dispositivo={

                              dispositivo

                            }

                            seleccionado={

                              contiene(

                                dispositivo

                              )

                            }

                            onSeleccionar={()=>

                              toggle(

                                dispositivo

                              )

                            }

                          />

                      )

                    }

                  </div>

                </div>

              );

            }

          )

        }

        <div className="selector-botones">

          <button

            className="btn-secundario"

            onClick={onCancelar}

          >

            Cancelar

          </button>

          <button

            className="btn-principal"

            onClick={()=>

              onAceptar(

                seleccion

              )

            }

          >

            Agregar

          </button>

        </div>

      </div>

    </div>

  );

}

export default SelectorDispositivos;