import { useState } from "react";

import { ToggleDispositivoCommand } from "../domain/commands/ToggleDispositivoCommand";

import Header from "../components/Header";
import Boton from "../components/Boton";
import CardDispositivo from "../components/CardDispositivo";
import FormularioDispositivo from "../components/FormularioDispositivo";

import { Dispositivo } from "../domain/Dispositivo";
import { DispositivoFactory } from "../factory/DispositivoFactory";
import { DispositivosService } from "../services/DispositivosService";

import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Dispositivos.css";

function Dispositivos() {

  const categorias = [

    "tv",

    "luces",

    "ventiladores",

    "aspiradora"

  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);

  const [dispositivos, setDispositivos] = useState<Dispositivo[]>(
    DispositivosService.obtenerTodos()
  );

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const refrescar = () => {
    setDispositivos(DispositivosService.obtenerTodos());
  };

  const agregarDispositivo=(nombre:string)=>{

    const nuevo=

      DispositivoFactory.crear(

        nombre,

        categoriaSeleccionada

      );

    DispositivosService.agregar(

      nuevo

    );

    refrescar();

    setMostrarFormulario(false);

  };

  const toggleDispositivo=(dispositivo:Dispositivo)=>{

    const comando=

      new ToggleDispositivoCommand(

        dispositivo

      );

    comando.execute();

    DispositivosService.actualizar(

      dispositivo

    );

    refrescar();

  };

  const eliminarDispositivo=(dispositivo:Dispositivo)=>{

    if(!confirm("¿Eliminar dispositivo?"))

      return;

    DispositivosService.eliminar(

      dispositivo

    );

    refrescar();

  };

  const editarDispositivo=(dispositivo:Dispositivo)=>{

    const nuevoNombre=

      prompt("Nuevo nombre");

    if(!nuevoNombre)

      return;

    dispositivo.cambiarNombre(

      nuevoNombre

    );

    DispositivosService.actualizar(

      dispositivo

    );

    refrescar();

  };

  const dispositivosFiltrados = dispositivos.filter(
    d => d.tipo === categoriaSeleccionada
  );

  return (
    <div className="layout">

      <Header titulo="DISPOSITIVOS" />

      <div className="dispositivos-layout">

        <aside className="sidebar">

          {categorias.map(categoria => (
            <button
              key={categoria}
              className={
                categoria === categoriaSeleccionada
                  ? "categoria activa"
                  : "categoria"
              }
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria.toUpperCase()}
            </button>
          ))}

        </aside>

        <main className="contenido-dispositivos">

          {dispositivosFiltrados.map(dispositivo => (
            <CardDispositivo
              key={dispositivo.nombre + dispositivo.tipo}
              dispositivo={dispositivo}
              onToggle={() => toggleDispositivo(dispositivo)}
              onEditar={() => editarDispositivo(dispositivo)}
              onEliminar={() => eliminarDispositivo(dispositivo)}
            />
          ))}

          <Boton
            nombre=""
            icono={<IconoAnadir />}
            classNameExtra="boton-seguridad boton-anadir"
            onClick={() => setMostrarFormulario(true)}
          />

        </main>

      </div>

      {mostrarFormulario && (
        <FormularioDispositivo
          onCrear={agregarDispositivo}
          onCerrar={() => setMostrarFormulario(false)}
        />
      )}

    </div>
  );
}

export default Dispositivos;