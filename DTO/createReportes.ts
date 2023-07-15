import { Expose, Transform, Type } from "class-transformer";

export class createReport {
    @Expose({ name: "nivel_incidencia" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    usu_nivel_incidencia: number;
    @Expose({ name: "categoria_incidencia" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })

    usu_categoria_incidencia: number;

    @Expose({ name: "descripcion" })
    @Type(() => String)

    usu_descripcion: string;
    @Expose({ name: "fecha" })
    @Transform(({ value }) => {

        if (/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros, fecha debe ser AAAA-MM-DD" };
    }, { toClassOnly: true })
    usu_fecha: String;

    @Expose({ name: "lugar_incidencia" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })

    usu_lugar_incidencia: number;

    @Expose({ name: "Trainer" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })


    usu_id_trainer: number;

    @Expose({ name: "Ordenador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })


    usu_id_ordenador: number;


}