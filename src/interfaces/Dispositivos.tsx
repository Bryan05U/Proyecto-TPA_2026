import {
  useEffect,
  useState
} from "react";

import Header from "../components/Header";
import Boton from "../components/Boton";

import CardDispositivo from
"../components/CardDispositivo";

import FormularioDispositivo from
"../components/FormularioDispositivo";

import { DispositivoComun }
from "../domain/DispositivoComun";

import { DispositivoFactory }
from "../factory/DispositivoFactory";

import IconoAnadir from
"../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Dispositivos.css";

function Dispositivos() {

  const categorias = [
    "tv",
    "luces",
    "bocinas",
    "ventiladores",
    "enchufes"
  ];

  const [
    categoriaSeleccionada,

    setCategoriaSeleccionada

  ] = useState("tv");

  const [
    dispositivos,

    setDispositivos

  ] = useState<DispositivoComun[]>(() => {

    const data =
      localStorage.getItem(
        "dispositivos"
      );

    if (!data) return [];

    return JSON.parse(data).map(
      (d: any) =>
        DispositivoComun.fromJSON(d)
    );
  });

  const [
    mostrarFormulario,

    setMostrarFormulario

  ] = useState(false);

  useEffect(() => {

    localStorage.setItem(
      "dispositivos",
      JSON.stringify(dispositivos)
    );

  }, [dispositivos]);

  const agregarDispositivo = (
    nombre: string
  ) => {

    const nuevo =
      DispositivoFactory.crear(
        nombre,
        categoriaSeleccionada
      );

    setDispositivos([
      ...dispositivos,
      nuevo
    ]);

    setMostrarFormulario(false);
  };

  const toggleDispositivo = (
    index: number
  ) => {

    const copia =
      [...dispositivos];

    copia[index].toggle();

    setDispositivos(copia);
  };

  const eliminarDispositivo = (
    index: number
  ) => {

    const confirmar =
      confirm(
        "¿Eliminar dispositivo?"
      );

    if (!confirmar) return;

    const copia =
      [...dispositivos];

    copia.splice(index, 1);

    setDispositivos(copia);
  };

  const editarDispositivo = (
    index: number
  ) => {

    const nuevoNombre =
      prompt(
        "Nuevo nombre"
      );

    if (!nuevoNombre) return;

    const copia =
      [...dispositivos];

    copia[index].cambiarNombre(
      nuevoNombre
    );

    setDispositivos(copia);
  };

  const dispositivosFiltrados =
    dispositivos.filter(
      d =>
        d.tipo ===
        categoriaSeleccionada
    );

  return (

    <div className="layout">

      <Header
        titulo="DISPOSITIVOS"
      />

      <div className="dispositivos-layout">

        {/* SIDEBAR */}

        <div className="sidebar">

          {categorias.map(
            categoria => (

            <button

              key={categoria}

              className={
                categoria ===
                categoriaSeleccionada

                ? "categoria activa"

                : "categoria"
              }

              onClick={() =>
                setCategoriaSeleccionada(
                  categoria
                )
              }

            >

              {categoria.toUpperCase()}

            </button>
          ))}

        </div>

        {/* CONTENIDO */}

        <div className="contenido-dispositivos">

          {dispositivosFiltrados.map(
            (
              dispositivo,
              index
            ) => (

            <CardDispositivo

              key={index}

              dispositivo={
                dispositivo
              }

              onToggle={() =>
                toggleDispositivo(
                  dispositivos.indexOf(
                    dispositivo
                  )
                )
              }

              onEditar={() =>
                editarDispositivo(
                  dispositivos.indexOf(
                    dispositivo
                  )
                )
              }

              onEliminar={() =>
                eliminarDispositivo(
                  dispositivos.indexOf(
                    dispositivo
                  )
                )
              }

            />
          ))}

          <Boton

            nombre=""

            icono={
              <IconoAnadir />
            }

            onClick={() =>
              setMostrarFormulario(
                true
              )
            }

            classNameExtra="
              boton-seguridad
              boton-anadir
            "
          />

        </div>

      </div>

      {mostrarFormulario && (

        <FormularioDispositivo

          onCrear={
            agregarDispositivo
          }

          onCerrar={() =>
            setMostrarFormulario(
              false
            )
          }

        />

      )}

    </div>
  );
}

export default Dispositivos;