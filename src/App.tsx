import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Seguridad from "./Seguridad";
import Dispositivos from "./Dispositivos";
import Escenas from "./Escenas";
import Historial from "./Historial";

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