import { useState } from "react";

import { ToggleDispositivoCommand } from "../domain/commands/ToggleDispositivoCommand";

import Header from "../components/Header";
import Boton from "../components/Boton";
import CardDispositivo from "../components/CardDispositivo";
import FormularioDispositivo from "../components/FormularioDispositivo";
import Editar from "../components/Editar";
import Confirmacion from "../components/Confirmacion";

import { Dispositivo } from "../domain/Dispositivo";
import { DispositivoFactory } from "../factory/DispositivoFactory";
import { DispositivosService } from "../services/DispositivosService";

import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Dispositivos.css";

function Dispositivos(){

  const categorias=[

    "tv",

    "luces",

    "ventiladores",

    "alarmas"

  ];

  const[categoriaSeleccionada,setCategoriaSeleccionada]=

    useState(categorias[0]);

  const[dispositivos,setDispositivos]=

    useState<Dispositivo[]>(

      DispositivosService.obtenerTodos()

    );

  const[mostrarFormulario,setMostrarFormulario]=

    useState(false);

  const[dispositivoEditando,setDispositivoEditando]=

    useState<Dispositivo|null>(null);

  const[dispositivoEliminar,setDispositivoEliminar]=

    useState<Dispositivo|null>(null);

  const[errorNombre,setErrorNombre]=

    useState("");

  const refrescar=()=>{

    setDispositivos(

      DispositivosService.obtenerTodos()

    );

  };

  const agregarDispositivo=(

    nombre:string

  )=>{

    if(

      DispositivosService.existeNombre(

        nombre

      )

    ){

      setErrorNombre(

        "Ya existe un dispositivo con ese nombre."

      );

      return;

    }

    const nuevo=

      DispositivoFactory.crear(

        nombre,

        categoriaSeleccionada

      );

    DispositivosService.agregar(

      nuevo

    );

    refrescar();

    setMostrarFormulario(

      false

    );

    setErrorNombre("");

  };

  const toggleDispositivo=(

    dispositivo:Dispositivo

  )=>{

    const comando=

      new ToggleDispositivoCommand(

        dispositivo

      );

    comando.execute();

    refrescar();

  };

  const eliminarDispositivo=(

    dispositivo:Dispositivo

  )=>{

    setDispositivoEliminar(

      dispositivo

    );

  };

  const editarDispositivo=(

    dispositivo:Dispositivo

  )=>{

    setErrorNombre("");

    setDispositivoEditando(

      dispositivo

    );

  };

  const dispositivosFiltrados=

    dispositivos.filter(

      d=>

        d.tipo===categoriaSeleccionada

    );

  return(

    <div className="layout">

      <Header titulo="DISPOSITIVOS"/>

      <div className="dispositivos-layout">

        <aside className="sidebar">

          {

            categorias.map(

              categoria=>

                <button

                  key={categoria}

                  className={

                    categoria===categoriaSeleccionada

                    ?

                    "categoria activa"

                    :

                    "categoria"

                  }

                  onClick={()=>

                    setCategoriaSeleccionada(

                      categoria

                    )

                  }

                >

                  {

                    categoria.toUpperCase()

                  }

                </button>

            )

          }

        </aside>

        <main className="contenido-dispositivos">

          {

            dispositivosFiltrados.map(

              dispositivo=>

                <CardDispositivo

                  key={

                    dispositivo.nombre+

                    dispositivo.tipo

                  }

                  dispositivo={

                    dispositivo

                  }

                  onToggle={()=>

                    toggleDispositivo(

                      dispositivo

                    )

                  }

                  onEditar={()=>

                    editarDispositivo(

                      dispositivo

                    )

                  }

                  onEliminar={()=>

                    eliminarDispositivo(

                      dispositivo

                    )

                  }

                />

            )

          }

          <Boton

            nombre=""

            icono={<IconoAnadir/>}

            classNameExtra="boton-seguridad boton-anadir"

            onClick={()=>

              setMostrarFormulario(

                true

              )

            }

          />

        </main>

      </div>

      {

        mostrarFormulario&&

        <FormularioDispositivo

          onCrear={

            agregarDispositivo

          }

          onCerrar={()=>

            setMostrarFormulario(

              false

            )

          }

        />

      }

      {

        dispositivoEditando&&

        <Editar

          titulo="Editar dispositivo"

          valorInicial={

            dispositivoEditando.nombre

          }

          textoAceptar="Guardar"

          textoCancelar="Cancelar"

          error={

            errorNombre

          }

          onAceptar={

            nombre=>{

              if(

                nombre===""

              )return;

              if(

                DispositivosService.existeNombre(

                  nombre,

                  dispositivoEditando.nombre

                )

              ){

                setErrorNombre(

                  "Ya existe un dispositivo con ese nombre."

                );

                return;

              }

              const nombreAnterior=

                dispositivoEditando.nombre;

              dispositivoEditando.cambiarNombre(

                nombre

              );

              DispositivosService.renombrar(

                nombreAnterior,

                dispositivoEditando

              );

              refrescar();

              setErrorNombre("");

              setDispositivoEditando(

                null

              );

            }

          }

          onCancelar={()=>{

            setErrorNombre("");

            setDispositivoEditando(

              null

            );

          }}

        />

      }

      {

        dispositivoEliminar&&

        <Confirmacion

          titulo="Eliminar dispositivo"

          mensaje={

            `¿Seguro que deseas eliminar "${dispositivoEliminar.nombre}"?`

          }

          textoAceptar="Eliminar"

          textoCancelar="Cancelar"

          onAceptar={()=>{

            DispositivosService.eliminar(

              dispositivoEliminar

            );

            refrescar();

            setDispositivoEliminar(

              null

            );

          }}

          onCancelar={()=>

            setDispositivoEliminar(

              null

            )

          }

        />

      }

    </div>

  );

}

export default Dispositivos;