import { Dispositivo } from "./Dispositivo";

export class DispositivoSeguridad
extends Dispositivo {

  constructor(
    nombre: string,
    tipo: string
  ) {

    super(nombre, tipo);
  }

  static fromJSON(
    obj: any
  ): DispositivoSeguridad {

    const dispositivo =
      new DispositivoSeguridad(
        obj.nombre,
        obj.tipo
      );

    dispositivo.activo =
      obj.activo;

    return dispositivo;
  }

}