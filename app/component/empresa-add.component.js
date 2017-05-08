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
var router_1 = require("@angular/router");
var empresa_service_1 = require("../services/empresa.service");
var industriaTipo_service_1 = require("../services/industriaTipo.service");
var ubigeo_service_1 = require("../services/ubigeo.service");
var empresa_1 = require("../model/empresa");
var EmpresaAddComponent = (function () {
    function EmpresaAddComponent(_empresaService, _industriaTipoService, _ubigeoService, _route, _router) {
        this._empresaService = _empresaService;
        this._industriaTipoService = _industriaTipoService;
        this._ubigeoService = _ubigeoService;
        this._route = _route;
        this._router = _router;
        this.titulo = "Empresa";
        this.lstUbigeo = [];
    }
    EmpresaAddComponent.prototype.ngOnInit = function () {
        console.log("Component EmpresaAddComponent Cargado");
        this.getIndustriasTipo();
        this.getDepartamentos();
        this.empresa = new empresa_1.Empresa(0, "", "", 0, "", "", null);
        this.ubigeoDepartamento = null;
        this.ubigeoProvincia = null;
        this.ubigeoDistrito = null;
    };
    EmpresaAddComponent.prototype.getIndustriasTipo = function () {
        var _this = this;
        this._industriaTipoService.getIndustriasTipo().subscribe(function (result) {
            _this.industriasTipo = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    EmpresaAddComponent.prototype.getDepartamentos = function () {
        var _this = this;
        this._ubigeoService.getAllDepartments("604").subscribe(function (result) {
            _this.lstUbigeoDepartamento = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    EmpresaAddComponent.prototype.onChangeDepartamento = function (pUbigeo) {
        this.getProvincias(pUbigeo);
        this.ubigeoProvincia = null;
        this.ubigeoDistrito = null;
        this.lstUbigeoDistrito = [];
    };
    EmpresaAddComponent.prototype.getProvincias = function (pUbigeo) {
        var _this = this;
        this._ubigeoService.getAllProvinces("604", pUbigeo.ubigeoCodigo).subscribe(function (result) {
            _this.lstUbigeoProvincia = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    EmpresaAddComponent.prototype.onChangeProvincia = function (pUbigeo) {
        this.getDistritos(pUbigeo);
        this.ubigeoDistrito = null;
    };
    EmpresaAddComponent.prototype.getDistritos = function (pUbigeo) {
        var _this = this;
        this._ubigeoService.getAllDistricts("604", pUbigeo.ubigeoCodigo).subscribe(function (result) {
            _this.lstUbigeoDistrito = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    EmpresaAddComponent.prototype.onAgregarUbigeo = function () {
        var newUbigeo;
        // var found = false;
        // var index = 0;
        // for (var i = 0; i < this.lstUbigeo.length; i ++) {
        //    let varUbigeo:Ubigeo = this.lstUbigeo[i];
        //    index = i;
        //      if( varUbigeo == newUbigeo){
        //        found = true;
        //        break;
        //      }
        // }
        //  if(found){
        //   this.lstUbigeo[i] = newUbigeo
        //  }else{
        this.lstUbigeo.push(newUbigeo);
        $('#myModalUbigeo').modal('hide');
        //}
    };
    EmpresaAddComponent.prototype.onEliminarUbigeo = function (ubigeo) {
        var index = this.lstUbigeo.indexOf(ubigeo);
        this.lstUbigeo.splice(index, 1);
    };
    EmpresaAddComponent.prototype.onMostrarUbigeo = function (ubigeo) {
        /*
             this.ubigeoDepartamento.CODIGO = ubigeo.CODIGO_DEPARTAMENTO
             this.ubigeoDepartamento.NOMBRE = ubigeo.NOMBRE_DEPARTAMENTO
             
             this.ubigeoProvincia.CODIGO = ubigeo.CODIGO_PROVINCIA
             this.ubigeoProvincia.NOMBRE = ubigeo.NOMBRE_PROVINCIA
        
             this.ubigeoDistrito.CODIGO = ubigeo.CODIGO
             this.ubigeoDistrito.NOMBRE = ubigeo.NOMBRE
        
             this.direccion = ubigeo.DIRECCION
             */
    };
    EmpresaAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._empresaService.addEmpresa(this.empresa).subscribe(function (result) {
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            else {
                alert("Se registro correctamente");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
        this._router.navigate(["/dashboard/lista-empresa"]);
    };
    return EmpresaAddComponent;
}());
EmpresaAddComponent = __decorate([
    core_1.Component({
        selector: "empresa-add",
        templateUrl: "app/view/empresa-add.html",
        providers: [empresa_service_1.EmpresaService, industriaTipo_service_1.IndustriaTipoService, ubigeo_service_1.UbigeoService]
    }),
    __metadata("design:paramtypes", [empresa_service_1.EmpresaService,
        industriaTipo_service_1.IndustriaTipoService,
        ubigeo_service_1.UbigeoService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmpresaAddComponent);
exports.EmpresaAddComponent = EmpresaAddComponent;
//# sourceMappingURL=empresa-add.component.js.map