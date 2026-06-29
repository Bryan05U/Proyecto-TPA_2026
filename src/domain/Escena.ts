import { Componente } from "./Componente";
import { DispositivoEscena } from "./DispositivoEscena";
import { DispositivosService } from "../services/DispositivosService";

export class Escena extends Componente{

  dispositivos:DispositivoEscena[];

  constructor(
    nombre:string,
    dispositivos:DispositivoEscena[]=[]
  ){

    super(nombre);

    this.dispositivos=dispositivos;

  }

  cambiarNombre(
    nombre:string
  ):void{

    this.nombre=nombre;

  }

  agregarDispositivo(
    dispositivo:DispositivoEscena
  ):void{

    this.dispositivos.push(dispositivo);

  }

  quitarDispositivo(
    dispositivo:DispositivoEscena
  ):void{

    this.dispositivos=this.dispositivos.filter(

      d=>

        !(

          d.nombre===dispositivo.nombre&&

          d.tipo===dispositivo.tipo

        )

    );

  }

  toggleDispositivo(
    nombre:string,
    tipo:string
  ):void{

    const dispositivo=

      this.dispositivos.find(

        d=>

          d.nombre===nombre&&

          d.tipo===tipo

      );

    if(dispositivo){

      dispositivo.toggle();

    }

  }

  clonar():Escena{

    return new Escena(

      this.nombre,

      this.dispositivos.map(

        d=>d.clonar()

      )

    );

  }

  activar():void{

      this.dispositivos.forEach(dispositivo=>{

        const real=

          DispositivosService.buscar(

            dispositivo.nombre,

            dispositivo.tipo

          );

        console.log(
          "Escena:",
          dispositivo.nombre,
          dispositivo.tipo,
          "->",
          real
        );

        if(real){

          if(dispositivo.activo){

            real.activar();

          }

          else{

            real.desactivar();

          }

          DispositivosService.actualizar(

            real

          );

        }

      }

    );

  }

  desactivar():void{

    this.dispositivos.forEach(

      dispositivo=>{

        const real=

          DispositivosService.buscar(

            dispositivo.nombre,

            dispositivo.tipo

          );

        if(real){

          real.desactivar();

          DispositivosService.actualizar(

            real

          );

        }

      }

    );

  }

  toggle():void{

    if(this.estaActiva()){

      this.desactivar();

    }

    else{

      this.activar();

    }

  }

  estaActiva():boolean{

    if(this.dispositivos.length===0)

      return false;

    return this.dispositivos.every(

      dispositivo=>{

        const real=

          DispositivosService.buscar(

            dispositivo.nombre,

            dispositivo.tipo

          );

        return(

          real?.activo===

          dispositivo.activo

        );

      }

    );

  }

  static fromJSON(
    obj:any
  ):Escena{

    return new Escena(

      obj.nombre,

      obj.dispositivos.map(

        (d:any)=>

          DispositivoEscena.fromJSON(d)

      )

    );

  }

}