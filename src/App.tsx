import { Routes, Route } from "react-router-dom";

import Login from "./interfaces/Login";

import Home
from "./interfaces/Home";

import Seguridad
from "./interfaces/Seguridad";

import SeguridadDispositivos
from "./interfaces/SeguridadDispositivos";

import Dispositivos
from "./interfaces/Dispositivos";

import Escenas
from "./interfaces/Escenas";

import Historial
from "./interfaces/Historial";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      {/* SEGURIDAD */}
      <Route
        path="/seguridad"
        element={<Seguridad />}
      />

      <Route
        path="/seguridad/:tipo"
        element={
          <SeguridadDispositivos />
        }
      />

      {/* OTRAS */}
      <Route
        path="/dispositivos"
        element={<Dispositivos />}
      />

      <Route
        path="/escenas"
        element={<Escenas />}
      />

      <Route
        path="/historial"
        element={<Historial />}
      />

    </Routes>
  );
}

export default App;