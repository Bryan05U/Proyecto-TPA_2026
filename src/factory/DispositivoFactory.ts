import { Dispositivo } from "../domain/Dispositivo";
import { DispositivoComun } from "../domain/DispositivoComun";
import { DispositivoSeguridad } from "../domain/DispositivoSeguridad";

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

  static fromJSON(
    obj:any
  ):Dispositivo{

    const dispositivo=this.crear(

      obj.nombre,

      obj.tipo

    );

    dispositivo.activo=obj.activo;

    return dispositivo;

  }

}