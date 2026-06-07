import { Dispositivo }
from "./Dispositivo";

export class DispositivoComun
extends Dispositivo {

  constructor(
    nombre: string,
    tipo: string
  ) {
    super(nombre, tipo);
  }
}