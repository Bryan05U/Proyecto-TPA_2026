import { DispositivoComun }
from "../domain/DispositivoComun";

import { DispositivoSeguridad }
from "../domain/DispositivoSeguridad";

export class DispositivoFactory {

  static crear(
    nombre: string,
    tipo: string
  ) {

    const categoriasSeguridad = [
      "camaras",
      "ventanas",
      "puertas",
      "temperatura"
    ];

    if (
      categoriasSeguridad.includes(
        tipo
      )
    ) {

      return new DispositivoSeguridad(
        nombre,
        tipo
      );
    }

    return new DispositivoComun(
      nombre,
      tipo
    );
  }
}