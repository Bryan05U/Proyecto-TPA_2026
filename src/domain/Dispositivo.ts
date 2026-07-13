import { Componente } from "./Componente";
import type { Observer } from "./observer/Observer";
import type { Subject } from "./observer/Subject";

export class Dispositivo extends Componente implements Subject{

  tipo:string;

  activo:boolean;

  private observadores:Observer[]=[];

  constructor(
    nombre:string,
    tipo:string
  ){

    super(nombre);

    this.tipo=tipo;

    this.activo=false;

  }

  agregarObservador(
    observer:Observer
  ):void{

    this.observadores.push(observer);

  }

  quitarObservador(
    observer:Observer
  ):void{

    this.observadores=
      this.observadores.filter(

        o=>o!==observer

      );

  }

  private notificar():void{

    this.observadores.forEach(

      observer=>

        observer.actualizar(this)

    );

  }

  activar():void{

    if(this.activo)return;

    this.activo=true;

    this.notificar();

  }

  desactivar():void{

    if(!this.activo)return;

    this.activo=false;

    this.notificar();

  }

  toggle():void{

    this.activo=!this.activo;

    this.notificar();

  }

  cambiarEstadoSinNotificacion(
    activo:boolean
  ):void{

    this.activo=activo;

  }

  cambiarNombre(
    nombre:string
  ):void{

    this.nombre=nombre;

  }

}