import { Dispositivo } from "../domain/Dispositivo";
import { HistorialObserver } from "../domain/observer/HistorialObserver";
import { DispositivoFactory } from "../factory/DispositivoFactory";

export class DispositivosService{

  private static historialObserver =
    new HistorialObserver();

  static categorias=[

    "tv",

    "luces",

    "ventiladores",

    "alarmas",

    "camaras",

    "puertas",

    "ventanas",

    "temperatura"

  ];

  static existeNombre(

    nombre:string,

    nombreAnterior?:string

  ):boolean{

    return this.obtenerTodos().some(

      dispositivo=>

        dispositivo.nombre.toLowerCase()===

        nombre.toLowerCase()

        &&

        (

          !nombreAnterior||

          dispositivo.nombre!==nombreAnterior

        )

    );

  }

  static obtener(
    categoria:string
  ):Dispositivo[]{

    const data=
      localStorage.getItem(
        categoria
      );

    if(!data)return[];

    return JSON.parse(data).map(

      (d:any)=>{

        const dispositivo=

          DispositivoFactory.fromJSON(d);

        dispositivo.agregarObservador(

          this.historialObserver

        );

        return dispositivo;

      }

    );

  }

  static guardar(
    categoria:string,
    dispositivos:Dispositivo[]
  ):void{

    localStorage.setItem(

      categoria,

      JSON.stringify(
        dispositivos
      )

    );

  }

  static obtenerTodos():Dispositivo[]{

    const dispositivos:Dispositivo[]=[];

    this.categorias.forEach(

      categoria=>{

        dispositivos.push(

          ...this.obtener(
            categoria
          )

        );

      }

    );

    return dispositivos;

  }

  static buscar(
    nombre:string,
    tipo:string
  ):Dispositivo|null{

    const dispositivos=
      this.obtener(tipo);

    return(

      dispositivos.find(

        d=>

          d.nombre===nombre&&

          d.tipo===tipo

      )??

      null

    );

  }

  static agregar(
    dispositivo:Dispositivo
  ):void{

    dispositivo.agregarObservador(

      this.historialObserver

    );

    const lista=this.obtener(dispositivo.tipo);

    lista.push(dispositivo);

    this.guardar(

      dispositivo.tipo,

      lista

    );

  }

  static actualizar(
    dispositivo:Dispositivo
  ):void{

    const lista=this.obtener(

      dispositivo.tipo

    );

    const indice=lista.findIndex(

      d=>

        d.nombre===dispositivo.nombre&&

        d.tipo===dispositivo.tipo

    );

    if(indice!==-1){

      lista[indice]=dispositivo;

      this.guardar(

        dispositivo.tipo,

        lista

      );

    }

  }

  static renombrar(

    nombreAnterior:string,

    dispositivo:Dispositivo

  ):void{

    const lista=this.obtener(

      dispositivo.tipo

    );

    const indice=lista.findIndex(

      d=>

        d.nombre===nombreAnterior&&

        d.tipo===dispositivo.tipo

    );

    if(indice!==-1){

      lista[indice]=dispositivo;

      this.guardar(

        dispositivo.tipo,

        lista

      );

    }

  }

  static eliminar(
    dispositivo:Dispositivo
  ):void{

    const lista=this.obtener(dispositivo.tipo).filter(

      d=>

        !(

          d.nombre===dispositivo.nombre&&

          d.tipo===dispositivo.tipo

        )

    );

    this.guardar(

      dispositivo.tipo,

      lista

    );

  }

  static toggle(

    dispositivo:Dispositivo

  ):void{

    dispositivo.toggle();

    this.actualizar(

      dispositivo

    );

  }

}