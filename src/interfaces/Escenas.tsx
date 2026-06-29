import { useState } from "react";

import Header from "../components/Header";
import Boton from "../components/Boton";
import CardEscena from "../components/CardEscena";
import EditorEscena from "../components/EditorEscenas";

import { Escena } from "../domain/Escena";
import { EscenasService } from "../services/EscenasServices";

import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Layout.css";

function Escenas(){

  const[escenas,setEscenas]=useState(

    EscenasService.obtener()

  );

  const[escenaEditando,setEscenaEditando]=useState<Escena|null>(null);

  const[nuevaEscena,setNuevaEscena]=useState(false);

  const guardarEscena=(

    escena:Escena

  )=>{

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

    if(

      !window.confirm(

        "¿Eliminar esta escena?"

      )

    )return;

    setEscenas(

      EscenasService.eliminar(

        escena.nombre

      )

    );

  };

  const activarEscena = (

    escena: Escena

  ) => {

    escena.toggle();

    setEscenas(

      [...EscenasService.obtener()]

    );

  };

  return(

    <div className="layout">

      <Header

        titulo="ESCENAS"

      />

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

        <Boton

          nombre=""

          icono={<IconoAnadir/>}

          classNameExtra="boton-seguridad boton-anadir"

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

        />

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

    </div>

  );

}

export default Escenas;