var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class createTrasiner {
    constructor(nombre, emailPerso, emailCoorpo, numMovil, numFijo, numEmpresa, numMovilEmpresa) {
        this.trai_nombre_completo = nombre;
        this.trai_email_personal = emailPerso;
        this.trai_email_corporativo = emailCoorpo;
        this.trai_telefono_movil = numMovil;
        this.trai_telefono_fijo = numFijo;
        this.trai_telefono_movil_empresarial;
        this.trai_telefono_empresa = numEmpresa;
        this.trai_telefono_movil_empresarial = numMovilEmpresa;
    }
}
__decorate([
    Expose({ name: "nombre_completo" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_nombre_completo", void 0);
__decorate([
    Expose({ name: "email_Personal" }),
    Transform(({ value }) => {
        if (/\S+@\S+.\S+/.test(value))
            return value;
        else
            throw { status: 400, message: "El correo no cumple con los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_email_personal", void 0);
__decorate([
    Expose({ name: "email_corporativo" }),
    Transform(({ value }) => {
        if (/\S+@\S+.\S+/.test(value))
            return value;
        else
            throw { status: 400, message: "El correo no cumple con los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_email_corporativo", void 0);
__decorate([
    Expose({ name: "numero_movil" }),
    Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_telefono_movil", void 0);
__decorate([
    Expose({ name: "numero_fijo" }),
    Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_telefono_fijo", void 0);
__decorate([
    Expose({ name: "numero_empresa" }),
    Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_telefono_empresa", void 0);
__decorate([
    Expose({ name: "numero_movil_empresa" }),
    Transform(({ value }) => {
        if (/^[0-9\s\W]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createTrasiner.prototype, "trai_telefono_movil_empresarial", void 0);
