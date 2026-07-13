import type { Observer } from "./Observer";

export interface Subject{

  agregarObservador(
    observer:Observer
  ):void;

  quitarObservador(
    observer:Observer
  ):void;

}