import { useState } from "react";
import Boton from "./componentes/Boton";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
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
          ubicacion="arriba"
          onClick={() => {
            setSeguridad(!seguridad);
            navigate("/seguridad");
          }}
        />
        <Boton
          nombre="DISPOSITIVOS"
          estado={dispositivos}
          ubicacion="abajo"
          onClick={() => {
            setDispositivos(!dispositivos)
            navigate("/dispositivos")
          }}
          
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
          ubicacion="arriba"
          onClick={() => {
            setEscenas(!escenas)
            navigate("/escenas")
          }}
          
        />
        <Boton
          nombre="HISTORIAL"
          estado={historial}
          ubicacion="abajo"
          onClick={() => {
            setHistorial(!historial)
            navigate("/historial")
          }}
          
        />
      </div>

    </div>
  );
}

export default Home;