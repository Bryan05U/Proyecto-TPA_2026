import { Dispositivo } from "../Dispositivo";
import type { Command } from "./Command";
import { DispositivosService } from "../../services/DispositivosService";

export class ToggleDispositivoCommand
implements Command{

  private dispositivo:Dispositivo;

  private estadoAnterior:boolean;

  constructor(

    dispositivo:Dispositivo

  ){

    this.dispositivo=dispositivo;

    this.estadoAnterior=

      dispositivo.activo;

  }

  execute():void{

    DispositivosService.toggle(

      this.dispositivo

    );

  }

  undo():void{

    this.dispositivo.cambiarEstadoSinNotificacion(

      this.estadoAnterior

    );

    DispositivosService.actualizar(

      this.dispositivo

    );

  }

}