import { useState } from "react";

import Header from "../components/Header";
import CardEscena from "../components/CardEscena";
import EditorEscena from "../components/EditorEscenas";
import Confirmacion from "../components/Confirmacion";

import { Escena } from "../domain/Escena";
import { EscenasService } from "../services/EscenasServices";

import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Layout.css";

function Escenas(){

  const[escenas,setEscenas]=useState(

    EscenasService.obtener()

  );

  const[escenaEliminar,setEscenaEliminar]=

    useState<Escena|null>(null);

  const[errorNombre,setErrorNombre]=

    useState(false);

  const[escenaEditando,setEscenaEditando]=

    useState<Escena|null>(null);

  const[nuevaEscena,setNuevaEscena]=

    useState(false);

  const guardarEscena=(

    escena:Escena

  )=>{

    const nombreExiste=

      escenas.some(

        e=>

          e.nombre.toLowerCase()===

          escena.nombre.toLowerCase()

          &&

          (

            nuevaEscena||

            e.nombre!==escenaEditando?.nombre

          )

      );

    if(nombreExiste){

      setErrorNombre(

        true

      );

      return;

    }

    let nuevasEscenas:Escena[];

    if(nuevaEscena){

      nuevasEscenas=

        EscenasService.agregar(

          escena

        );

    }

    else{

      nuevasEscenas=

        EscenasService.editar(

          escenaEditando!.nombre,

          escena

        );

    }

    setEscenas(

      nuevasEscenas

    );

    setEscenaEditando(

      null

    );

    setNuevaEscena(

      false

    );

  };

  const eliminarEscena=(

    escena:Escena

  )=>{

    setEscenaEliminar(

      escena

    );

  };

  const activarEscena=(

    escena:Escena

  )=>{

    EscenasService.toggle(

      escena

    );

    setEscenas(

      [...EscenasService.obtener()]

    );

  };

  return(

    <div className="layout">

      <Header

        titulo="ESCENAS"

      />

      <div className="escenas-acciones">

        <button

          className="btn-nueva-escena"

          onClick={()=>{

            setNuevaEscena(

              true

            );

            setEscenaEditando(

              new Escena(

                "Nueva escena",

                []

              )

            );

          }}

          title="Nueva escena"

        >

          <IconoAnadir/>

        </button>

      </div>

      <div className="contenedor layout-escenas">

        {

          escenas.map(

            escena=>

              <CardEscena

                key={

                  escena.nombre

                }

                escena={

                  escena

                }

                onToggle={()=>

                  activarEscena(

                    escena

                  )

                }

                onEditar={()=>{

                  setNuevaEscena(

                    false

                  );

                  setEscenaEditando(

                    escena

                  );

                }}

                onEliminar={()=>

                  eliminarEscena(

                    escena

                  )

                }

              />

          )

        }

      </div>

      {

        escenaEditando&&

        <EditorEscena

          escena={

            escenaEditando

          }

          onGuardar={

            guardarEscena

          }

          onCancelar={()=>{

            setEscenaEditando(

              null

            );

            setNuevaEscena(

              false

            );

          }}

        />

      }

      {

        escenaEliminar&&

        <Confirmacion

          titulo="Eliminar escena"

          mensaje={

            `¿Seguro que deseas eliminar "${escenaEliminar.nombre}"?`

          }

          textoAceptar="Eliminar"

          textoCancelar="Cancelar"

          onAceptar={()=>{

            setEscenas(

              EscenasService.eliminar(

                escenaEliminar.nombre

              )

            );

            setEscenaEliminar(

              null

            );

          }}

          onCancelar={()=>

            setEscenaEliminar(

              null

            )

          }

        />

      }

      {

        errorNombre&&

        <Confirmacion

          titulo="Nombre no disponible"

          mensaje="Ya existe una escena con ese nombre. Elige otro nombre."

          textoAceptar="Aceptar"

          textoCancelar={null}

          onAceptar={()=>

            setErrorNombre(

              false

            )

          }

          onCancelar={()=>

            setErrorNombre(

              false

            )

          }

        />

      }

    </div>

  );

}

export default Escenas;