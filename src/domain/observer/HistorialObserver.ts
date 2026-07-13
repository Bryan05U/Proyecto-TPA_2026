import type { Observer } from "./Observer";

import { Dispositivo } from "../Dispositivo";

import { HistorialService } from "../../services/HistorialService";

export class HistorialObserver
implements Observer{

  private static habilitado=true;

  static pausar():void{

    this.habilitado=false;

  }

  static reanudar():void{

    this.habilitado=true;

  }

  actualizar(
    dispositivo:Dispositivo
  ):void{

    if(

      !HistorialObserver.habilitado

    )return;

    HistorialService.agregar(

      dispositivo.nombre,

      dispositivo.tipo,

      dispositivo.activo

      ?

      "activado"

      :

      "desactivado"

    );

  }

}