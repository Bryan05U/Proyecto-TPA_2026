import { Dispositivo } from "./Dispositivo";

export class DispositivoComun extends Dispositivo {

  constructor(
    nombre: string,
    tipo: string
  ) {
    super(nombre, tipo);
  }

  static fromJSON(
    obj: any
  ): DispositivoComun {

    const dispositivo =
      new DispositivoComun(
        obj.nombre,
        obj.tipo
      );

    dispositivo.activo =
      obj.activo;

    return dispositivo;
  }
}