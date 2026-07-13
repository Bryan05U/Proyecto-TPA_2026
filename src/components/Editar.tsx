import { useState } from "react";

import "../styles/Editar.css";

type Props={

  titulo:string;

  valorInicial:string;

  placeholder?:string;

  textoAceptar?:string;

  textoCancelar?:string;

  error?:string;

  onAceptar:(texto:string)=>void;

  onCancelar:()=>void;

};

function Editar({

  titulo,

  valorInicial,

  placeholder="",

  textoAceptar="Guardar",

  textoCancelar="Cancelar",

  error,

  onAceptar,

  onCancelar

}:Props){

  const[texto,setTexto]=

    useState(valorInicial);

  return(

    <div className="overlay">

      <div className="editar-card">

        <h2>

          {titulo}

        </h2>

        <input

          autoFocus

          value={texto}

          placeholder={placeholder}

          onChange={

            e=>

            setTexto(

              e.target.value

            )

          }

        />

        {

          error &&

          <p className="editar-error">

            {error}

          </p>

        }

        <div className="editar-botones">

          <button

            className="btn-secundario"

            onClick={onCancelar}

          >

            {textoCancelar}

          </button>

          <button

            className="btn-principal"

            onClick={()=>

              onAceptar(

                texto.trim()

              )

            }

          >

            {textoAceptar}

          </button>

        </div>

      </div>

    </div>

  );

}

export default Editar;