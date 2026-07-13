export class HistorialEvento{

  dispositivoNombre:string;

  dispositivoTipo:string;

  accion:string;

  fecha:string;

  detalles:{
    nombre:string;
    accion:string;
  }[];

  constructor(

    dispositivoNombre:string,

    dispositivoTipo:string,

    accion:string,

    fecha:string,

    detalles:{
      nombre:string;
      accion:string;
    }[]=[]

  ){

    this.dispositivoNombre=

      dispositivoNombre;

    this.dispositivoTipo=

      dispositivoTipo;

    this.accion=

      accion;

    this.fecha=

      fecha;

    this.detalles=

      detalles;

  }

  static fromJSON(

    obj:any

  ):HistorialEvento{

    return new HistorialEvento(

      obj.dispositivoNombre,

      obj.dispositivoTipo,

      obj.accion,

      obj.fecha,

      obj.detalles??[]

    );

  }

}