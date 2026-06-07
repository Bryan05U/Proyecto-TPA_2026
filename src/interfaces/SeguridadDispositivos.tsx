import {
  useEffect,
  useState
} from "react";

import { ToggleDispositivoCommand } from "../domain/commands/ToggleDispositivoCommand";

import {
  useParams
} from "react-router-dom";

import Header from "../components/Header";
import Boton from "../components/Boton";
import CardDispositivo from "../components/CardDispositivo";
import FormularioDispositivo from "../components/FormularioDispositivo";

import { DispositivoSeguridad }
from "../domain/DispositivoSeguridad";

import { DispositivoFactory }
from "../factory/DispositivoFactory";

import "../styles/Layout.css";
import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react"

function SeguridadDispositivos() {

  const { tipo } = useParams();

  // 🔹 DISPOSITIVOS
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

  // 🔹 MODAL
  const [
    mostrarFormulario,

    setMostrarFormulario

  ] = useState(false);

  // 🔹 GUARDAR
  useEffect(() => {

    localStorage.setItem(
      tipo || "",
      JSON.stringify(dispositivos)
    );

  }, [dispositivos, tipo]);

  // 🔹 CREAR
  const agregarDispositivo = (
    nombre: string
  ) => {

    const nuevo =
      DispositivoFactory.crear(
        nombre,
        tipo || ""
      );

    setDispositivos([
      ...dispositivos,
      nuevo
    ]);

    setMostrarFormulario(false);
  };

  // 🔹 TOGGLE
  const toggleDispositivo = (
    index: number
  ) => {

    const copia =
      [...dispositivos];

    const dispositivo =
      copia[index];

    const comando =
      new ToggleDispositivoCommand(
        dispositivo
      );

    comando.execute();

    const historial =
      JSON.parse(

        localStorage.getItem(
          "historial"
        ) || "[]"

      );

    historial.push({

      dispositivoNombre:
        dispositivo.nombre,

      dispositivoTipo:
        dispositivo.tipo,

      accion:
        dispositivo.activo
          ? "activado"
          : "desactivado",

      fecha:
        new Date()
          .toLocaleString()

    });

    localStorage.setItem(

      "historial",

      JSON.stringify(
        historial
      )

    );

    setDispositivos([
      ...copia
    ]);
  };

  // 🔹 ELIMINAR
const eliminarDispositivo = (
  index: number
) => {

  const confirmar =
    confirm(
      "¿Seguro que quieres eliminar este dispositivo?"
    );

  if (!confirmar) return;

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

        {/* BOTÓN AGREGAR */}
        <Boton
          classNameExtra="boton-seguridad boton-anadir"
          nombre=""
          icono={<IconoAnadir />}
          onClick={() =>
            setMostrarFormulario(true)
          }
        />

      </div>

      {/* FORMULARIO */}
      {mostrarFormulario && (

        <FormularioDispositivo

          onCrear={agregarDispositivo}

          onCerrar={() =>
            setMostrarFormulario(false)
          }

        />

      )}

    </div>
  );
}

export default SeguridadDispositivos;