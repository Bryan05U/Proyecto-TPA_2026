import { Componente } from "./Componente";

export class Dispositivo extends Componente{

  tipo:string;

  activo:boolean;

  constructor(
    nombre:string,
    tipo:string
  ){

    super(nombre);

    this.tipo=tipo;

    this.activo=false;

  }

  activar():void{

    this.activo=true;

  }

  desactivar():void{

    this.activo=false;

  }

  toggle():void{

    this.activo=!this.activo;

  }

  cambiarNombre(
    nombre:string
  ):void{

    this.nombre=nombre;

  }

  static fromJSON(
    obj:any
  ):Dispositivo{

    const dispositivo=new Dispositivo(

      obj.nombre,

      obj.tipo

    );

    dispositivo.activo=obj.activo;

    return dispositivo;

  }

}