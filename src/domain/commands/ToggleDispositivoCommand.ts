import { Command } from "./Command";
import { Dispositivo } from "../Dispositivo";

export class ToggleDispositivoCommand
implements Command {

  constructor(
    private dispositivo: Dispositivo
  ) {}

  execute(): void {

    this.dispositivo.toggle();
  }

  undo(): void {

    this.dispositivo.toggle();
  }
}