import { useEffect, useState }
from "react";

import { useParams }
from "react-router-dom";

import Header
from "../components/Header";

import Boton
from "../components/Boton";

import CardDispositivo
from "../components/CardDispositivo";

import { DispositivoSeguridad }
from "../domain/DispositivoSeguridad";

import "../styles/Layout.css";

function SeguridadDispositivos() {

  const { tipo } = useParams();

  // 🔹 ESTADO
  const [dispositivos, setDispositivos] =
    useState<DispositivoSeguridad[]>(() => {

      const data =
        localStorage.getItem(
          tipo || ""
        );

      if (!data) return [];

      return JSON.parse(data).map(
        (d: any) =>
          DispositivoSeguridad.fromJSON(d)
      );
    });

  // 🔹 GUARDAR
  useEffect(() => {

    localStorage.setItem(
      tipo || "",
      JSON.stringify(dispositivos)
    );

  }, [dispositivos, tipo]);

  // 🔹 AGREGAR
  const agregarDispositivo = () => {

    const nombre =
      prompt(
        "Nombre del dispositivo"
      );

    if (!nombre) return;

    const nuevo =
      new DispositivoSeguridad(
        nombre,
        tipo || ""
      );

    setDispositivos([
      ...dispositivos,
      nuevo
    ]);
  };

  // 🔹 TOGGLE
  const toggleDispositivo = (
    index: number
  ) => {

    const copia = [...dispositivos];

    copia[index].toggle();

    setDispositivos([...copia]);
  };

  // 🔹 ELIMINAR
  const eliminarDispositivo = (
    index: number
  ) => {

    const copia = [...dispositivos];

    copia.splice(index, 1);

    setDispositivos(copia);
  };

  // 🔹 EDITAR
  const cambiarNombre = (
    index: number
  ) => {

    const nuevoNombre =
      prompt("Nuevo nombre");

    if (!nuevoNombre) return;

    const copia = [...dispositivos];

    copia[index].cambiarNombre(
      nuevoNombre
    );

    setDispositivos([...copia]);
  };

  return (

    <div className="layout">

      <Header
        titulo={
          tipo?.toUpperCase() || ""
        }
      />

      <div className="
        contenedor
        layout-escenas
      ">

        {/* DISPOSITIVOS */}
        {dispositivos.map(
          (dispositivo, index) => (

          <CardDispositivo

            key={index}

            dispositivo={dispositivo}

            onToggle={() =>
              toggleDispositivo(index)
            }

            onEditar={() =>
              cambiarNombre(index)
            }

            onEliminar={() =>
              eliminarDispositivo(index)
            }
          />
        ))}

        {/* AGREGAR */}
        <Boton
          nombre="+"
          onClick={agregarDispositivo}
          classNameExtra="
            boton-seguridad
          "
        />

      </div>

    </div>
  );
}

export default SeguridadDispositivos;