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
var autenticacion_service_1 = require("../services/autenticacion.service");
var usuario_1 = require("../model/usuario");
var LoginComponent = (function () {
    function LoginComponent(_route, _router, _autenticacionService) {
        this._route = _route;
        this._router = _router;
        this._autenticacionService = _autenticacionService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("login console");
        this._autenticacionService.logout();
        this.usuario = new usuario_1.Usuario("", "", "");
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._autenticacionService.login(this.usuario).subscribe(function (result) {
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            else {
                var user = result.data;
                var a = JSON.stringify(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this._router.navigate(["/dashboard"]);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "app/view/login.html",
        providers: [autenticacion_service_1.AutenticacionService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        autenticacion_service_1.AutenticacionService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map