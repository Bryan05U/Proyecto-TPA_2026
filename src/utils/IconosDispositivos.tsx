import IconoTV from "../assets/Dispositivos/Logo_Tv.svg?react";
import IconoLuz from "../assets/Dispositivos/Logo_Luces.svg?react";
import IconoVentiladores from "../assets/Dispositivos/Logo_Ventiladores.svg?react";
import IconoAlarma from "../assets/Dispositivos/Logo_Alarma.svg?react";
import IconoCamara from "../assets/Seguridad/Logo_Camara.svg?react";
import IconoPuerta from "../assets/Seguridad/Logo_Puerta.svg?react";
import IconoVentana from "../assets/Seguridad/Logo_Ventana.svg?react";
import IconoTemperatura from "../assets/Seguridad/Logo_Temperatura.svg?react";

export function obtenerIconoDispositivo(
  tipo:string
){

  switch(tipo){

    case"tv":

      return <IconoTV/>;

    case"luces":

      return <IconoLuz/>;

    case"ventiladores":

      return <IconoVentiladores/>;

    case"camaras":

      return <IconoCamara/>;

    case "alarmas":

      return <IconoAlarma/>;

    case"puertas":

      return <IconoPuerta/>;

    case"ventanas":

      return <IconoVentana/>;

    default:

      return <IconoTemperatura/>;

  }

}