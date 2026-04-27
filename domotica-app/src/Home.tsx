import { useState } from "react";
import Boton from "./componentes/boton";
import "./home.css";

function Home() {
  const [luz, setLuz] = useState<boolean>(false);

  return (
    <div className="home">
      <Boton
        nombre="Luz sala"
        estado={luz}
        onClick={() => setLuz(!luz)}
      />
    </div>
  );
}

export default Home;