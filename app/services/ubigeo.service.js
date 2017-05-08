"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UbigeoService = (function () {
    function UbigeoService(_http) {
        this._http = _http;
    }
    UbigeoService.prototype.getUbigeo = function (pCodigoPa, pCodigoNvl, pCodigo, pCodigoAsociado) {
        return this._http.get("http://localhost:52234/Ubigeo/obtenerTodos/" + pCodigoPa + "/" + pCodigoNvl + "/" + pCodigo + "/" + pCodigoAsociado).map(function (res) { return res.json(); });
    };
    UbigeoService.prototype.getAllDepartments = function (pPais) {
        return this._http.get("http://localhost:52234/Ubigeo/obtenerTodosDepartamentos?pPais=" + pPais).map(function (res) { return res.json(); });
    };
    UbigeoService.prototype.getAllProvinces = function (pPais, pUbigeo) {
        return this._http.get("http://localhost:52234/Ubigeo/obtenerTodasProvincias?pPais=" + pPais + "&pUbigeo=" + pUbigeo).map(function (res) { return res.json(); });
    };
    UbigeoService.prototype.getAllDistricts = function (pPais, pUbigeo) {
        return this._http.get("http://localhost:52234/Ubigeo/obtenerTodosDistritos?pPais=" + pPais + "&pUbigeo=" + pUbigeo).map(function (res) { return res.json(); });
    };
    UbigeoService.prototype.getLocationById = function (pUbigeo, pParametro) {
        return this._http.get("http://localhost:52234/Ubigeo/obtenerUbicacion?pUbigeo=" + pUbigeo + "&pParametro=" + pParametro).map(function (res) { return res.json(); });
    };
    return UbigeoService;
}());
UbigeoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UbigeoService);
exports.UbigeoService = UbigeoService;
//# sourceMappingURL=ubigeo.service.js.map