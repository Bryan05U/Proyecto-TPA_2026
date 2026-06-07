import { Observer } from "./Observer";

import { Subject } from "./Subject";

export class Dispositivo
implements Subject {

  nombre: string;

  tipo: string;

  activo: boolean;

  private observers:
    Observer[] = [];

  constructor(
    nombre: string,
    tipo: string
  ) {

    this.nombre = nombre;
    this.tipo = tipo;
    this.activo = false;
  }

  agregarObserver(
    observer: Observer
  ): void {

    this.observers.push(
      observer
    );
  }

  removerObserver(
    observer: Observer
  ): void {

    this.observers =
      this.observers.filter(
        o => o !== observer
      );
  }

  notificar(): void {

    this.observers.forEach(
      observer =>
        observer.actualizar(
          this
        )
    );
  }

  toggle(): void {

    this.activo =
      !this.activo;

    this.notificar();
  }

  cambiarNombre(
    nombre: string
  ): void {

    this.nombre = nombre;
  }
}