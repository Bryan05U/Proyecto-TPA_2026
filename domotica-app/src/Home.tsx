import { useState } from "react";
import Boton from "./componentes/Boton";
import "./Home.css";

function Home() {
  const [seguridad, setSeguridad] = useState(false);
  const [dispositivos, setDispositivos] = useState(false);
  const [escenas, setEscenas] = useState(false);
  const [historial, setHistorial] = useState(false);

  return (
    <div className="home">

      {/* IZQUIERDA */}
      <div className="columna">
        <Boton
          nombre="Seguridad"
          estado={seguridad}
          onClick={() => setSeguridad(!seguridad)}
        />
        <Boton
          nombre="Dispositivos"
          estado={dispositivos}
          onClick={() => setDispositivos(!dispositivos)}
        />
      </div>

      {/* CENTRO */}
      <div className="centro">
        <img src="/logo.png" className="logo" />
      </div>

      {/* DERECHA */}
      <div className="columna">
        <Boton
          nombre="Escenas"
          estado={escenas}
          onClick={() => setEscenas(!escenas)}
        />
        <Boton
          nombre="Historial"
          estado={historial}
          onClick={() => setHistorial(!historial)}
        />
      </div>

    </div>
  );
}

export default Home;