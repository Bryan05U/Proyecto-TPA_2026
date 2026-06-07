import { Dispositivo } from "../Dispositivo";
import type { Command } from "./Command";

export class ToggleDispositivoCommand
implements Command {

  private dispositivo: Dispositivo;

  private estadoAnterior: boolean;

  constructor(
    dispositivo: Dispositivo
  ) {

    this.dispositivo =
      dispositivo;

    this.estadoAnterior =
      dispositivo.activo;
  }

  execute(): void {

    this.dispositivo.toggle();
  }

  undo(): void {

    this.dispositivo.activo =
      this.estadoAnterior;
  }
}