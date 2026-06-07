import {
  useEffect,
  useState
} from "react";

import Header
from "../components/Header";

import {
  HistorialEvento
}
from "../domain/HistorialEvento";

import IconoRevertir
from "../assets/Botones/Logo_Revertir.svg?react";

import "../styles/Historial.css";

function Historial() {

  const [

    eventos,

    setEventos

  ] = useState<
    HistorialEvento[]
  >([]);

  useEffect(() => {

    cargarEventos();

  }, []);

  const cargarEventos =
    () => {

      const data =
        localStorage.getItem(
          "historial"
        );

      if (!data) return;

      setEventos(

        JSON.parse(data).map(
          (e: any) =>

            HistorialEvento
              .fromJSON(e)
        )

      );
    };

  const revertir = (
    evento: HistorialEvento
  ) => {

    const data =
      localStorage.getItem(
        "dispositivos"
      );

    if (!data) return;

    const dispositivos =
      JSON.parse(data);

    const dispositivo =
      dispositivos.find(
        (d: any) =>

          d.nombre ===
            evento.dispositivoNombre

          &&

          d.tipo ===
            evento.dispositivoTipo
      );

    if (!dispositivo)
      return;

    dispositivo.activo =
      !dispositivo.activo;

    localStorage.setItem(

      "dispositivos",

      JSON.stringify(
        dispositivos
      )

    );

    alert(
      "Acción revertida"
    );
  };

  return (

    <div className="layout">

      <Header
        titulo="HISTORIAL"
      />

      <div
        className="
          historial-container
        "
      >

        {eventos.map(
          (
            evento,
            index
          ) => (

          <div
            key={index}
            className="
              historial-card
            "
          >

            <span>

              El dispositivo

              {" "}

              <strong>
                {
                  evento.dispositivoNombre
                }
              </strong>

              {" "}

              fue

              {" "}

              {
                evento.accion
              }

              {" a las "}

              {
                evento.fecha
              }

            </span>

            <button

              className="
                btn-revertir
              "

              onClick={() =>
                revertir(
                  evento
                )
              }

            >

              <IconoRevertir />

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Historial;