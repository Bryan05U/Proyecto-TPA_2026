import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import "../styles/Layout.css"

function Seguridad() {
  const navigate = useNavigate();

  return (
    <div className="layout layout-seguridad">

      <div className="columna columna-seguridad">
        <Boton
          nombre="Cámaras"
          onClick={() => navigate("/camaras")}
          classNameExtra="boton boton-seguridad"
        />
        <Boton 
          nombre="Ventanas"
          onClick={() => navigate("/ventanas")}
          classNameExtra="boton boton-seguridad"
        />
      </div>

      <div className="columna columna-seguridad">
        <Boton 
          nombre="Puertas"
          onClick={() => navigate("/puertas")}
          classNameExtra="boton boton-seguridad"
        />
        <Boton 
          nombre="Temperatura"
          onClick={() => navigate("/temperatura")}
          classNameExtra="boton boton-seguridad"
        />
      </div>

    </div>
  )
}

export default Seguridad;