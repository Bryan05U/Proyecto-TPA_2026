export abstract class Componente{

  nombre:string;

  constructor(
    nombre:string
  ){

    this.nombre=nombre;

  }

  abstract activar():void;

  abstract desactivar():void;

  abstract toggle():void;

}