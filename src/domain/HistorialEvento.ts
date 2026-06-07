export class HistorialEvento {

  constructor(

    public dispositivoNombre: string,

    public dispositivoTipo: string,

    public accion: string,

    public fecha: string

  ) {}

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