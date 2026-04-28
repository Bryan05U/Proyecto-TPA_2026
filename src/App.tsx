import { Routes, Route } from "react-router-dom";
import Home from "./interfaces/Home";
import Seguridad from "./interfaces/Seguridad";
import Dispositivos from "./interfaces/Dispositivos";
import Escenas from "./interfaces/Escenas";
import Historial from "./interfaces/Historial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seguridad" element={<Seguridad />} />
      <Route path="/dispositivos" element={<Dispositivos />} />
      <Route path="/escenas" element={<Escenas />} />
      <Route path="/historial" element={<Historial />} />
    </Routes>
  );
}

export default App;