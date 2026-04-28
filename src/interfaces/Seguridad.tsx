import { useNavigate } from "react-router-dom";

function Seguridad() {
  const navigate = useNavigate();

  return (
    <div className="seguridad">
      <button onClick={() => navigate("/camaras")}>Cámaras</button>
      <button onClick={() => navigate("/camaras")}>Ventanas</button>
      <button onClick={() => navigate("/camaras")}>Puertas</button>
      <button onClick={() => navigate("/camaras")}>Temperatura</button>
    </div>
  )
}

export default Seguridad;