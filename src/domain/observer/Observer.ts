import { Dispositivo } from "../Dispositivo";

export interface Observer{

    actualizar(dispositivo:Dispositivo):void;

}