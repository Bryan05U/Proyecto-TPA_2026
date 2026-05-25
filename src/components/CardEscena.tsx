import BaseCard from "./BaseCard";

import IconoEditar from
"../assets/Botones/Logo_Editar.svg?react";

import IconoBorrar from
"../assets/Botones/Logo_Borrar.svg?react";

type Props = {

  nombre: string;

  onEditar: () => void;

  onEliminar: () => void;
};

function CardEscena({
  nombre,
  onEditar,
  onEliminar
}: Props) {

  return (

    <BaseCard

      titulo={nombre}

      acciones={
        <>

          <button
            className="accion-btn"
            onClick={onEditar}
          >
            <IconoEditar />
          </button>

          <button
            className="accion-btn"
            onClick={onEliminar}
          >
            <IconoBorrar />
          </button>

        </>
      }

    />

  );
}

export default CardEscena;