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

        new Date().toLocaleString()

      )

    );

    this.guardar(historial);

  }

  static limpiar():void{

    localStorage.removeItem("historial");

  }

}