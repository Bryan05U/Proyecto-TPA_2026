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
          nombre="SEGURIDAD"
          estado={seguridad}
          onClick={() => setSeguridad(!seguridad)}
          ubicacion="arriba"
        />
        <Boton
          nombre="DISPOSITIVOS"
          estado={dispositivos}
          onClick={() => setDispositivos(!dispositivos)}
          ubicacion="abajo"
        />
      </div>

      {/* CENTRO */}
      <div className="centro">
        <img src="/assets/Home/Domoserv.png" className="logo" />
      </div>

      {/* DERECHA */}
      <div className="columna">
        <Boton
          nombre="ESCENAS"
          estado={escenas}
          onClick={() => setEscenas(!escenas)}
          ubicacion="arriba"
        />
        <Boton
          nombre="HISTORIAL"
          estado={historial}
          onClick={() => setHistorial(!historial)}
          ubicacion="abajo"
        />
      </div>

    </div>
  );
}

export default Home;