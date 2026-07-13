import { HistorialEvento } from "../domain/HistorialEvento";

export class HistorialService{

  static obtener():HistorialEvento[]{

    const data=localStorage.getItem("historial");

    if(!data)return[];

    return JSON.parse(data).map(

      (e:any)=>HistorialEvento.fromJSON(e)

    );

  }

  static guardar(
    eventos:HistorialEvento[]
  ):void{

    localStorage.setItem(

      "historial",

      JSON.stringify(eventos)

    );

  }

  private static obtenerFechaHora():string{

    const ahora=new Date();

    const hora=ahora.toLocaleTimeString();

    const fecha=ahora.toLocaleDateString();

    return `${hora} - ${fecha}`;

  }

  static agregar(
    dispositivoNombre:string,
    dispositivoTipo:string,
    accion:string
  ):void{

    const historial=this.obtener();

    historial.push(

      new HistorialEvento(

        dispositivoNombre,

        dispositivoTipo,

        accion,

        this.obtenerFechaHora()

      )

    );

    this.guardar(historial);

  }

  static agregarEscena(

    nombre:string,

    accion:string,

    detalles:{

      nombre:string;

      accion:string;

    }[]

  ):void{

    const historial=

      this.obtener();

    historial.unshift(

      new HistorialEvento(

        nombre,

        "escena",

        accion,

        this.obtenerFechaHora(),

        detalles

      )

    );

    this.guardar(

      historial

    );

  }

  static limpiar():void{

    localStorage.removeItem("historial");

  }

}