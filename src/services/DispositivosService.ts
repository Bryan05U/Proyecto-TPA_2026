import { Dispositivo } from "../domain/Dispositivo";

export class DispositivosService{

  static categorias=[

    "tv",

    "luces",

    "ventiladores",

    "aspiradora",

    "camaras",

    "puertas",

    "ventanas",

    "temperatura"

  ];

  static obtener(
    categoria:string
  ):Dispositivo[]{

    const data=
      localStorage.getItem(
        categoria
      );

    if(!data)return[];

    return JSON.parse(data).map(

      (d:any)=>

        Dispositivo.fromJSON(d)

    );

  }

  static guardar(
    categoria:string,
    dispositivos:Dispositivo[]
  ):void{

    localStorage.setItem(

      categoria,

      JSON.stringify(
        dispositivos
      )

    );

  }

  static obtenerTodos():Dispositivo[]{

    const dispositivos:Dispositivo[]=[];

    this.categorias.forEach(

      categoria=>{

        dispositivos.push(

          ...this.obtener(
            categoria
          )

        );

      }

    );

    return dispositivos;

  }

  static buscar(
    nombre:string,
    tipo:string
  ):Dispositivo|null{

    const dispositivos=
      this.obtener(tipo);

    return(

      dispositivos.find(

        d=>

          d.nombre===nombre&&

          d.tipo===tipo

      )??

      null

    );

    }

  static agregar(dispositivo:Dispositivo):void{

    const lista=this.obtener(dispositivo.tipo);

    lista.push(dispositivo);

    this.guardar(dispositivo.tipo,lista);

  }

  static actualizar(dispositivo:Dispositivo):void{

    const lista=this.obtener(dispositivo.tipo);

    const indice=lista.findIndex(

      d=>

        d.nombre===dispositivo.nombre&&

        d.tipo===dispositivo.tipo

    );

    if(indice!==-1){

      lista[indice]=dispositivo;

      this.guardar(dispositivo.tipo,lista);

    }

  }

  static eliminar(dispositivo:Dispositivo):void{

    const lista=this.obtener(dispositivo.tipo).filter(

      d=>

        !(

          d.nombre===dispositivo.nombre&&

          d.tipo===dispositivo.tipo

        )

    );

    this.guardar(

      dispositivo.tipo,

      lista

    );

  }

  static toggle(dispositivo:Dispositivo):void{

    dispositivo.toggle();

    this.actualizar(dispositivo);

  }

}