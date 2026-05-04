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

      {/* Sección de Bienvenida e Icono Configuración */}
      <div className="bienvenida-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', alignItems: 'center' }}>
        <h2 style={{ fontSize: '20px' }}>Bienvenido/a ____________________</h2>
        <img src={logoConfig} alt="Config" style={{ width: '40px', cursor: 'pointer' }} />
      </div>
      
      <div className="contenedor layout-home">

        {/* IZQUIERDA */}
        <div className="columna">
          <Boton
            nombre="SEGURIDAD"
            classNameExtra="arriba"
            icono={logoCamara}
            onClick={() => navigate("/seguridad")}
          />
          <Boton
            nombre="DISPOSITIVOS"
            classNameExtra="abajo"
            icono={logoDispositivos}
            onClick={() => navigate("/dispositivos")}
          />
        </div>

        {/* CENTRO */}
        <div className="centro">
          <img src={logo} className="logo" alt="Logo Central" />
        </div>

        {/* DERECHA */}
        <div className="columna">
          <Boton
            nombre="ESCENAS"
            classNameExtra="arriba"
            icono={logoEscenas}
            onClick={() => navigate("/escenas")}
          />
          <Boton
            nombre="HISTORIAL"
            classNameExtra="abajo"
            icono={logoHistorial}
            onClick={() => navigate("/historial")}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;