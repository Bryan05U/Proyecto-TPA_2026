export class Escena {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  static fromJSON(obj: any): Escena {
    return new Escena(obj.nombre);
  }
}