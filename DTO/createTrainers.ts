import { Expose, Transform } from "class-transformer";

export class createTrasiner {

    @Expose({ name: "nombre_completo" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    trai_nombre_completo: String;

    @Expose({ name: "email_Personal" })
    @Transform(({ value }) => {
        if (/\S+@\S+.\S+/.test(value))
            return value;
        else throw { status: 400, message: "El correo no cumple con los parametros de entrada" }
    }, { toClassOnly: true })
    trai_email_personal: String;
    @Expose({ name: "email_corporativo" })
    @Transform(({ value }) => {
        if (/\S+@\S+.\S+/.test(value))
            return value;
        else throw { status: 400, message: "El correo no cumple con los parametros de entrada" }
    }, { toClassOnly: true })
    trai_email_corporativo: String;

    @Expose({ name: "numero_movil" })
    @Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    trai_telefono_movil: String;
    @Expose({ name: "numero_fijo" })
    @Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    trai_telefono_fijo: String;
    @Expose({ name: "numero_empresa" })
    @Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    trai_telefono_empresa: String;
    @Expose({ name: "numero_movil_empresa" })
    @Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value
        else throw { status: 400, message: "Error en los parametros" }
    }, { toClassOnly: true })
    trai_telefono_movil_empresarial: String;

    constructor(nombre: string,
        emailPerso: string,
        emailCoorpo: string,
        numMovil: string,
        numFijo: string,
        numEmpresa: string,
        numMovilEmpresa: string) {


        this.trai_nombre_completo = nombre
        this.trai_email_personal = emailPerso
        this.trai_email_corporativo = emailCoorpo
        this.trai_telefono_movil = numMovil
        this.trai_telefono_fijo = numFijo
        this.trai_telefono_movil_empresarial
        this.trai_telefono_empresa = numEmpresa
        this.trai_telefono_movil_empresarial = numMovilEmpresa

    }


}