import Boton from "../components/Boton";
import "../styles/Layout.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Home/logo_2.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="layout layout-home">

      {/* IZQUIERDA */}
      <div className="columna">
        <Boton
          nombre="SEGURIDAD"
          ubicacion="arriba"
          onClick={() => navigate("/seguridad")}
        />
        <Boton
          nombre="DISPOSITIVOS"
          ubicacion="abajo"
          onClick={() => navigate("/dispositivos")}
        />
      </div>

      {/* CENTRO */}
      <div className="centro">
        <img src={logo} className="logo" />
      </div>

      {/* DERECHA */}
      <div className="columna">
        <Boton
          nombre="ESCENAS"
          ubicacion="arriba"
          onClick={() => navigate("/escenas")}
        />
        <Boton
          nombre="HISTORIAL"
          ubicacion="abajo"
          onClick={() => navigate("/historial")}
        />
      </div>

    </div>
  );
}

export default Home;