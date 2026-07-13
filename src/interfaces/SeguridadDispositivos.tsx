import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Boton from "../components/Boton";
import CardDispositivo from "../components/CardDispositivo";
import FormularioDispositivo from "../components/FormularioDispositivo";
import Editar from "../components/Editar";
import Confirmacion from "../components/Confirmacion";

import { DispositivoSeguridad } from "../domain/DispositivoSeguridad";
import { DispositivoFactory } from "../factory/DispositivoFactory";
import { ToggleDispositivoCommand } from "../domain/commands/ToggleDispositivoCommand";
import { DispositivosService } from "../services/DispositivosService";

import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react";

import "../styles/Layout.css";

function SeguridadDispositivos(){

  const{tipo}=useParams();

  const[dispositivos,setDispositivos]=

  useState<DispositivoSeguridad[]>([]);

  const[mostrarFormulario,setMostrarFormulario]=

  useState(false);

  const[dispositivoEditando,setDispositivoEditando]=

  useState<DispositivoSeguridad|null>(null);

  const[dispositivoEliminar,setDispositivoEliminar]=

  useState<DispositivoSeguridad|null>(null);

  useEffect(()=>{

    if(!tipo)return;

    setDispositivos(

      DispositivosService.obtener(

        tipo

      ) as DispositivoSeguridad[]

    );

  },[tipo]);

  const refrescar=()=>{

    if(!tipo)return;

    setDispositivos(

      DispositivosService.obtener(

        tipo

      ) as DispositivoSeguridad[]

    );

  };

  const agregarDispositivo=(

    nombre:string

  )=>{

    const nuevo=

      DispositivoFactory.crear(

        nombre,

        tipo||""

      );

    DispositivosService.agregar(

      nuevo

    );

    refrescar();

    setMostrarFormulario(false);

  };

  const toggleDispositivo=(

    dispositivo:DispositivoSeguridad

  )=>{

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

  const editarDispositivo=(

    dispositivo:DispositivoSeguridad

  )=>{

    setDispositivoEditando(

      dispositivo

    );

  };

  const eliminarDispositivo=(

    dispositivo:DispositivoSeguridad

  )=>{

    setDispositivoEliminar(

      dispositivo

    );

  };

  return(

    <div className="layout">

      <Header

        titulo={

          tipo?.toUpperCase()||""

        }

      />

      <div className="contenedor layout-escenas">

        {

          dispositivos.map(

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

          classNameExtra=

          "boton-seguridad boton-anadir"

          onClick={()=>

            setMostrarFormulario(

              true

            )

          }

        />

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

          onAceptar={

            nombre=>{

              if(

                nombre===""

              )return;

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

              setDispositivoEditando(

                null

              );

            }

          }

          onCancelar={()=>

            setDispositivoEditando(

              null

            )

          }

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

export default SeguridadDispositivos;