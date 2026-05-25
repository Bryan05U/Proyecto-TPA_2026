import { useNavigate } from "react-router-dom";

import "../styles/Header.css";

import IconoVolver from
"../assets/Botones/Logo_Volver.svg?react";

type HeaderProps = {

  titulo: string;

  mostrarVolver?: boolean;
};

function Header({

  titulo,

  mostrarVolver = true

}: HeaderProps) {

  const navigate = useNavigate();

  return (

    <div className="header">

      {/* BOTÓN VOLVER */}

      {mostrarVolver && (

        <button
          className="boton-volver"
          onClick={() => navigate(-1)}
        >

          <IconoVolver />

        </button>

      )}

      {/* TITULO */}

      <h1>{titulo}</h1>

    </div>
  );
}

export default Header;