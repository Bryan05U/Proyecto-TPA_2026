import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Boton from "../components/Boton";
import CardDispositivo from "../components/CardDispositivo";
import FormularioDispositivo from "../components/FormularioDispositivo";
import { DispositivoSeguridad } from "../domain/DispositivoSeguridad";
import { DispositivoFactory } from "../factory/DispositivoFactory";
import { ToggleDispositivoCommand } from "../domain/commands/ToggleDispositivoCommand";
import { DispositivosService } from "../services/DispositivosService";
import IconoAnadir from "../assets/Botones/Logo_Añadir.svg?react";
import "../styles/Layout.css";

function SeguridadDispositivos(){

  const { tipo } = useParams();

  const [dispositivos,setDispositivos]=useState<DispositivoSeguridad[]>(()=>{

    return DispositivosService.obtener(
      tipo||""
    ) as DispositivoSeguridad[];

  });

  const [mostrarFormulario,setMostrarFormulario]=useState(false);

  useEffect(()=>{

    DispositivosService.guardar(

      tipo||"",

      dispositivos

    );

  },[dispositivos,tipo]);

  const agregarDispositivo=(nombre:string)=>{

    const nuevo=DispositivoFactory.crear(
      nombre,
      tipo||""
    );

    setDispositivos([
      ...dispositivos,
      nuevo
    ]);

    setMostrarFormulario(false);

  };

  const actualizarEscenas=(dispositivo:DispositivoSeguridad)=>{

    const data=localStorage.getItem("escenas");

    if(!data)return;

    const escenas=JSON.parse(data);

    escenas.forEach((escena:any)=>{

      escena.dispositivos.forEach((d:any)=>{

        if(
          d.nombre===dispositivo.nombre &&
          d.tipo===dispositivo.tipo
        ){
          d.activo=dispositivo.activo;
        }

      });

    });

    localStorage.setItem(
      "escenas",
      JSON.stringify(escenas)
    );

  };

  const toggleDispositivo=(index:number)=>{

    const copia=[...dispositivos];

    const dispositivo=copia[index];

    const comando=new ToggleDispositivoCommand(dispositivo);

    comando.execute();

    actualizarEscenas(dispositivo);

    const historial=JSON.parse(
      localStorage.getItem("historial")||"[]"
    );

    historial.push({
      dispositivoNombre:dispositivo.nombre,
      dispositivoTipo:dispositivo.tipo,
      accion:dispositivo.activo?"activado":"desactivado",
      fecha:new Date().toLocaleString()
    });

    localStorage.setItem(
      "historial",
      JSON.stringify(historial)
    );

    setDispositivos([...copia]);

  };

  const eliminarDispositivo=(index:number)=>{

    if(!confirm("¿Seguro que quieres eliminar este dispositivo?"))return;

    const copia=[...dispositivos];

    copia.splice(index,1);

    setDispositivos(copia);

  };

  const cambiarNombre=(index:number)=>{

    const nuevoNombre=prompt("Nuevo nombre");

    if(!nuevoNombre)return;

    const copia=[...dispositivos];

    copia[index].cambiarNombre(nuevoNombre);

    setDispositivos([...copia]);

  };

  return(

    <div className="layout">

      <Header
        titulo={tipo?.toUpperCase()||""}
      />

      <div className="contenedor layout-escenas">

        {

          dispositivos.map(

            (dispositivo,index)=>(

              <CardDispositivo

                key={index}

                dispositivo={dispositivo}

                onToggle={()=>
                  toggleDispositivo(index)
                }

                onEditar={()=>
                  cambiarNombre(index)
                }

                onEliminar={()=>
                  eliminarDispositivo(index)
                }

              />

            )

          )

        }

        <Boton

          classNameExtra="boton-seguridad boton-anadir"

          nombre=""

          icono={<IconoAnadir/>}

          onClick={()=>
            setMostrarFormulario(true)
          }

        />

      </div>

      {

        mostrarFormulario&&(

          <FormularioDispositivo

            onCrear={agregarDispositivo}

            onCerrar={()=>
              setMostrarFormulario(false)
            }

          />

        )

      }

    </div>

  );

}

export default SeguridadDispositivos;