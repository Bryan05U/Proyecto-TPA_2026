export class Dispositivo {

  nombre: string;
  tipo: string;
  activo: boolean;

  constructor(
    nombre: string,
    tipo: string
  ) {

    this.nombre = nombre;
    this.tipo = tipo;
    this.activo = false;
  }

  toggle() {
    this.activo = !this.activo;
  }

  cambiarNombre(
    nuevoNombre: string
  ) {

    this.nombre = nuevoNombre;
  }

}