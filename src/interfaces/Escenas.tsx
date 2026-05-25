import { useEffect, useState } from "react";

import Header from "../components/Header";
import Boton from "../components/Boton";
import CardEscena from "../components/CardEscena";
import FormularioEscena from "../components/FormularioEscenas";

import { Escena } from "../domain/Escena";

import IconoAnadir from
"../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Layout.css";

function Escenas() {

  const [escenas, setEscenas] =
    useState<Escena[]>(() => {

      const data =
        localStorage.getItem("escenas");

      if (!data) return [];

      return JSON.parse(data).map(
        (e: any) =>
          Escena.fromJSON(e)
      );
    });

  const [
    mostrarFormulario,

    setMostrarFormulario

  ] = useState(false);

  // GUARDAR

  useEffect(() => {

    localStorage.setItem(
      "escenas",
      JSON.stringify(escenas)
    );

  }, [escenas]);

  // CREAR

  const agregarEscena = (
    nombre: string
  ) => {

    const nueva =
      new Escena(nombre);

    setEscenas([
      ...escenas,
      nueva
    ]);

    setMostrarFormulario(false);
  };

  // ELIMINAR

  const eliminarEscena = (
    index: number
  ) => {

    const copia = [...escenas];

    copia.splice(index, 1);

    setEscenas(copia);
  };

  // EDITAR

  const editarEscena = (
    index: number
  ) => {

    const nuevoNombre =
      prompt("Nuevo nombre");

    if (!nuevoNombre) return;

    const copia = [...escenas];

    copia[index].nombre =
      nuevoNombre;

    setEscenas([...copia]);
  };

  return (

    <div className="layout">

      <Header titulo="ESCENAS" />

      <div className="
        contenedor
        layout-escenas
      ">

        {/* ESCENAS */}

        {escenas.map(
          (escena, index) => (

          <CardEscena

            key={index}

            nombre={escena.nombre}

            onEditar={() =>
              editarEscena(index)
            }

            onEliminar={() =>
              eliminarEscena(index)
            }

          />

        ))}

        {/* BOTÓN AÑADIR */}

        <Boton

          nombre=""

          icono={<IconoAnadir />}

          onClick={() =>
            setMostrarFormulario(true)
          }

          classNameExtra="
            boton-seguridad
            boton-anadir
          "
        />

      </div>

      {/* FORMULARIO */}

      {mostrarFormulario && (

        <FormularioEscena

          onCrear={agregarEscena}

          onCerrar={() =>
            setMostrarFormulario(false)
          }

        />

      )}

    </div>
  );
}

export default Escenas;