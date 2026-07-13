import "../styles/Confirmacion.css";

type Props={

  titulo:string;

  mensaje:string;

  textoAceptar?:string;

  textoCancelar?:string|null;

  onAceptar:()=>void;

  onCancelar:()=>void;

};

function Confirmacion({

  titulo,

  mensaje,

  textoAceptar="Aceptar",

  textoCancelar="Cancelar",

  onAceptar,

  onCancelar

}:Props){

  return(

    <div className="overlay">

      <div className="confirmacion">

        <h2>

          {titulo}

        </h2>

        <p>

          {mensaje}

        </p>

        <div className="confirmacion-botones">

          {

            textoCancelar&&

            <button

              className="btn-secundario"

              onClick={onCancelar}

            >

              {textoCancelar}

            </button>

          }

          <button

            className="btn-principal"

            onClick={onAceptar}

          >

            {textoAceptar}

          </button>

        </div>

      </div>

    </div>

  );

}

export default Confirmacion;