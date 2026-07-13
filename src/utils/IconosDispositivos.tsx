import IconoTV from "../assets/Seguridad/Logo_Ventana.svg?react";
import IconoLuz from "../assets/Seguridad/Logo_Ventana.svg?react";
import IconoEnchufe from "../assets/Seguridad/Logo_Ventana.svg?react";
import IconoCamara from "../assets/Seguridad/Logo_Camara.svg?react";
import IconoPuerta from "../assets/Seguridad/Logo_Puerta.svg?react";
import IconoVentana from "../assets/Seguridad/Logo_Ventana.svg?react";
import IconoTemperatura from "../assets/Seguridad/Logo_Temperatura.svg?react";

export function obtenerIconoDispositivo(
  tipo:string
){

  switch(tipo){

    case"televisores":

      return <IconoTV/>;

    case"luces":

      return <IconoLuz/>;

    case"enchufes":

      return <IconoEnchufe/>;

    case"camaras":

      return <IconoCamara/>;

    case"puertas":

      return <IconoPuerta/>;

    case"ventanas":

      return <IconoVentana/>;

    default:

      return <IconoTemperatura/>;

  }

}