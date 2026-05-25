import Boton from "../components/Boton";
import "../styles/Layout.css";
import { useNavigate } from "react-router-dom";
// Importamos los logos nuevos
import logo from "../assets/Home/logo.png";
import IconoCamara from "../assets/Home/Logo Camara.svg?react";
import IconoDispositivos from "../assets/Home/Logo Dispositivos.svg?react";
import IconoEscenas from "../assets/Home/Logo Escena.svg?react";
import IconoHistorial from "../assets/Home/Logo Historial (Home).svg?react";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="layout">

      <Header
        titulo="DOMOSERV"
        mostrarVolver={false}
      />
      
      <div className="contenedor layout-home">

        {/* IZQUIERDA */}
        <div className="columna">
          <Boton
            nombre="SEGURIDAD"
            icono={<IconoCamara />}
            classNameExtra="arriba"
            onClick={() => navigate("/seguridad")}
          />
          <Boton
            nombre="DISPOSITIVOS"
            icono={<IconoDispositivos />}
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
            icono={<IconoEscenas />}
            classNameExtra="arriba"
            onClick={() => navigate("/escenas")}
          />
          <Boton
            nombre="HISTORIAL"
            icono={<IconoHistorial />}
            classNameExtra="abajo"
            onClick={() => navigate("/historial")}
          />
        </div>

      </div>

    </div>
  );
}

export default Home;