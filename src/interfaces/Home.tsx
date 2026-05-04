import Boton from "../components/Boton";
import "../styles/Layout.css";
import { useNavigate } from "react-router-dom";
// Importamos los logos nuevos
import logo from "../assets/Home/logo.png";
import logoCamara from "../assets/Home/Logo Camara.svg";
import logoDispositivos from "../assets/Home/Logo Dispositivos.svg";
import logoEscenas from "../assets/Home/Logo Escena.svg";
import logoHistorial from "../assets/Home/Logo Historial (Home).svg";
import logoConfig from "../assets/Home/Configuracion.svg";
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
            icono={logoCamara}
            classNameExtra="arriba"
            onClick={() => navigate("/seguridad")}
          />
          <Boton
            nombre="DISPOSITIVOS"
            icono={logoDispositivos}
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
            icono={logoEscenas}
            classNameExtra="arriba"
            onClick={() => navigate("/escenas")}
          />
          <Boton
            nombre="HISTORIAL"
            icono={logoHistorial}
            classNameExtra="abajo"
            onClick={() => navigate("/historial")}
          />
        </div>

      </div>

    </div>
  );
}

export default Home;