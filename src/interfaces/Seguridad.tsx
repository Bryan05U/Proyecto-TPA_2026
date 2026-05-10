import { useNavigate } from "react-router-dom";

import Boton from "../components/Boton";
import Header from "../components/Header";

import "../styles/Layout.css";

function Seguridad() {

  const navigate = useNavigate();

  return (
    <div className="layout">

      <Header titulo="SEGURIDAD" />

      <div className="contenedor layout-seguridad">

        {/* IZQUIERDA */}
        <div className="columna columna-seguridad">

          <Boton
            nombre="CÁMARAS"
            onClick={() => navigate("/seguridad/camaras")}
            classNameExtra="boton-seguridad"
          />

          <Boton
            nombre="VENTANAS"
            onClick={() => navigate("/seguridad/ventanas")}
            classNameExtra="boton-seguridad"
          />

        </div>

        {/* DERECHA */}
        <div className="columna columna-seguridad">

          <Boton
            nombre="PUERTAS"
            onClick={() => navigate("/seguridad/puertas")}
            classNameExtra="boton-seguridad"
          />

          <Boton
            nombre="TEMPERATURA"
            onClick={() => navigate("/seguridad/temperatura")}
            classNameExtra="boton-seguridad"
          />

        </div>

      </div>

    </div>
  );
}

export default Seguridad;