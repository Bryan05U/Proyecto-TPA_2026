export class Configuracion {

    private modoOscuro: boolean;
    private ubicacionHabilitada: boolean;
    private permisosCompartidos: boolean;

    constructor(
        modoOscuro: boolean = false,
        ubicacionHabilitada: boolean = false,
        permisosCompartidos: boolean = false
    ) {
        this.modoOscuro = modoOscuro;
        this.ubicacionHabilitada = ubicacionHabilitada;
        this.permisosCompartidos = permisosCompartidos;
    }

    obtenerEstado() {
        return {
            modoOscuro: this.modoOscuro,
            ubicacionHabilitada: this.ubicacionHabilitada,
            permisosCompartidos: this.permisosCompartidos,
        }
    }
}