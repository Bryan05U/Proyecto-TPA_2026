import Boton from "../components/Boton";
import "../styles/Layout.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Home/logo.png";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="layout">

      <Header titulo="DOMOSERV" />
      
      <div className="contenedor layout-home">

        {/* IZQUIERDA */}
        <div className="columna">
          <Boton
            nombre="SEGURIDAD"
            classNameExtra="arriba"
            onClick={() => navigate("/seguridad")}
          />
          <Boton
            nombre="DISPOSITIVOS"
            classNameExtra="abajo"
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
            classNameExtra="arriba"
            onClick={() => navigate("/escenas")}
          />
          <Boton
            nombre="HISTORIAL"
            classNameExtra="abajo"
            onClick={() => navigate("/historial")}
          />
        </div>

      </div>

    </div>
  );
}

export default Home;