export class HistorialEvento {

  dispositivoNombre: string;
  dispositivoTipo: string;
  accion: string;
  fecha: string;

  constructor(
    dispositivoNombre: string,
    dispositivoTipo: string,
    accion: string,
    fecha: string
  ) {

    this.dispositivoNombre = dispositivoNombre;
    this.dispositivoTipo = dispositivoTipo;
    this.accion = accion;
    this.fecha = fecha;

  }

  esEscena(): boolean {

    return this.dispositivoTipo === "escena";

  }

  static fromJSON(
    obj: any
  ): HistorialEvento {

    return new HistorialEvento(
      obj.dispositivoNombre,
      obj.dispositivoTipo,
      obj.accion,
      obj.fecha
    );

  }

}