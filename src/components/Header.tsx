import { useNavigate } from "react-router-dom";

import "../styles/Header.css";

// ICONO TEMPORAL
import IconoVolver from
"../assets/Botones/Logo_Volver.svg?react";

type Props = {

  titulo: string;

  mostrarVolver?: boolean;
};

function Header({
  titulo,
  mostrarVolver = true
}: Props) {

  const navigate = useNavigate();

  return (

    <header className="header">

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

    </header>
  );
}

export default Header;