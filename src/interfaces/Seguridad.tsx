import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import "../styles/Layout.css"

function Seguridad() {
  const navigate = useNavigate();

  return (
    <div className="layout layout-seguridad">
      <Boton
        nombre="Cámaras"
        onClick={() => navigate("/camaras")}
      />
      <Boton 
        nombre="Ventanas"
        onClick={() => navigate("/ventanas")}
      />
      <Boton 
        nombre="Puertas"
        onClick={() => navigate("/puertas")}
      />
      <Boton 
        nombre="Temperatura"
        onClick={() => navigate("/temperatura")}
      />
    </div>
  )
}

export default Seguridad;