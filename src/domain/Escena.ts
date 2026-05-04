export type Dispositivo = {
  id: number;
  nombre: string;
  activo: boolean;
};

export class Escena {
  nombre: string;
  dispositivos: Dispositivo[];

  constructor(nombre: string, dispositivos: Dispositivo[] = []) {
    this.nombre = nombre;
    this.dispositivos = dispositivos;
  }

  agregarDispositivo(dispositivo: Dispositivo) {
    this.dispositivos.push(dispositivo);
  }

  eliminarDispositivo(id: number) {
    this.dispositivos = this.dispositivos.filter(d => d.id !== id);
  }

  activar() {
    this.dispositivos.forEach(d => d.activo = true);
  }

  desactivar() {
    this.dispositivos.forEach(d => d.activo = false);
  }

  static fromJSON(obj: any): Escena {
    return new Escena(obj.nombre, obj.dispositivos || []);
  }
}