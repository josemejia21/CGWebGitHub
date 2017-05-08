"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var login_component_1 = require("./component/login.component");
var empresas_list_component_1 = require("./component/empresas-list.component");
var empresas_detail_component_1 = require("./component/empresas-detail.component");
var empresa_add_component_1 = require("./component/empresa-add.component");
var empresa_edit_component_1 = require("./component/empresa-edit.component");
var dashboard_component_1 = require("./component/dashboard.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            empresas_list_component_1.EmpresasListComponent,
            empresa_add_component_1.EmpresaAddComponent,
            empresa_edit_component_1.EmpresaEditComponent,
            empresas_detail_component_1.EmpresasDetailComponent,
            dashboard_component_1.DashboardComponent
        ],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map