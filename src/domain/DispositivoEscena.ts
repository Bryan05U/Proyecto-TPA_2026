export class DispositivoEscena{

  nombre:string;

  tipo:string;

  activo:boolean;

  constructor(
    nombre:string,
    tipo:string,
    activo:boolean
  ){

    this.nombre=nombre;
    this.tipo=tipo;
    this.activo=activo;

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

  clonar():DispositivoEscena{

    return new DispositivoEscena(

      this.nombre,

      this.tipo,

      this.activo

    );

  }

  static fromJSON(
    obj:any
  ):DispositivoEscena{

    return new DispositivoEscena(

      obj.nombre,

      obj.tipo,

      obj.activo

    );

  }

}