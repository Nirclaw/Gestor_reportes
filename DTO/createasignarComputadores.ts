import { Expose, Transform, Type } from "class-transformer";

export class crearYasignar {

    @Expose({ name: "serial_teclado" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    ordenador_id_teclado: number;
    @Expose({ name: "serial_mouse" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })

    ordenador_id_mouse: number;
    @Expose({ name: "serial_diadema" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })

    ordenador_id_diadema: number;
    @Expose({ name: "id_salon" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    ordenador_id_salon: number

    constructor(teclado: number, mouse: number, diadema: number, salon: number) {
        this.ordenador_id_teclado = teclado
        this.ordenador_id_mouse = mouse
        this.ordenador_id_salon = salon
        this.ordenador_id_diadema = diadema

    }

}
