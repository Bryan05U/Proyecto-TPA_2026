import { useNavigate }
from "react-router-dom";

import Boton from "../components/Boton";
import Header from "../components/Header";

// Importando iconos de botones
import IconoCamara from "../assets/Seguridad/Logo_Camara.svg?react";
import IconoVentana from "../assets/Seguridad/Logo_Ventana.svg?react";
import IconoPuerta from "../assets/Seguridad/Logo_Puerta.svg?react";
import IconoTemperatura from "../assets/Seguridad/Logo_Temperatura.svg?react";

import "../styles/Layout.css";

function Seguridad() {

  const navigate = useNavigate();

  return (

    <div className="layout">

      <Header titulo="SEGURIDAD" />

      <div className="
        contenedor
        layout-seguridad
      ">

        {/* IZQUIERDA */}
        <div className="
          columna
          columna-seguridad
        ">

          <Boton
            nombre="CÁMARAS"
            icono={<IconoCamara />}
            onClick={() =>
              navigate(
                "/seguridad/camaras"
              )
            }
            classNameExtra="
              boton-seguridad
            "
          />

          <Boton
            nombre="VENTANAS"
            icono={<IconoVentana />}
            onClick={() =>
              navigate(
                "/seguridad/ventanas"
              )
            }
            classNameExtra="
              boton-seguridad
            "
          />

        </div>

        {/* DERECHA */}
        <div className="
          columna
          columna-seguridad
        ">

          <Boton
            nombre="PUERTAS"
            icono={<IconoPuerta />}
            onClick={() =>
              navigate(
                "/seguridad/puertas"
              )
            }
            classNameExtra="
              boton-seguridad
            "
          />

          <Boton
            nombre="TEMPERATURA"
            icono={<IconoTemperatura />}
            onClick={() =>
              navigate(
                "/seguridad/temperatura"
              )
            }
            classNameExtra="
              boton-seguridad
            "
          />

        </div>

      </div>

    </div>
  );
}

export default Seguridad;