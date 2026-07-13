import { Escena } from "../domain/Escena";

export class EscenasService{

  private static readonly STORAGE="escenas";

  static obtener():Escena[]{

    const data=localStorage.getItem(

      this.STORAGE

    );

    if(!data)return[];

    return JSON.parse(data).map(

      (e:any)=>Escena.fromJSON(e)

    );

  }

  static guardar(
    escenas:Escena[]
  ):void{

    localStorage.setItem(

      this.STORAGE,

      JSON.stringify(escenas)

    );

  }

  static agregar(
    escena:Escena
  ):Escena[]{

    const escenas=this.obtener();

    escenas.push(escena);

    this.guardar(escenas);

    return escenas;

  }

  static editar(
    escenaAnterior:string,
    escenaNueva:Escena
  ):Escena[]{

    const escenas=this.obtener();

    const index=escenas.findIndex(

      e=>e.nombre===escenaAnterior

    );

    if(index!==-1){

      escenas[index]=escenaNueva;

    }

    this.guardar(escenas);

    return escenas;

  }

  static eliminar(
    nombre:string
  ):Escena[]{

    const escenas=this.obtener().filter(

      e=>e.nombre!==nombre

    );

    this.guardar(escenas);

    return escenas;

  }

}