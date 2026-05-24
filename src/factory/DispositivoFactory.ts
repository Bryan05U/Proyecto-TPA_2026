import { DispositivoSeguridad }
from "../domain/DispositivoSeguridad";

export class DispositivoFactory {

  static crear(
    nombre: string,
    tipo: string
  ): DispositivoSeguridad {

    return new DispositivoSeguridad(
      nombre,
      tipo
    );
  }

}