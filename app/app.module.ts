import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders} from './app.routing';

import {LoginComponent} from "./component/login.component";
import {EmpresasListComponent} from "./component/empresas-list.component";
import {EmpresasDetailComponent} from "./component/empresas-detail.component";
import {EmpresaAddComponent} from "./component/empresa-add.component";
import {EmpresaEditComponent} from "./component/empresa-edit.component";

import {DashboardComponent} from "./component/dashboard.component";

@NgModule({
	imports:      [ BrowserModule, HttpModule, FormsModule, routing],
	declarations: [ 
	AppComponent,
	LoginComponent,
	EmpresasListComponent,
	EmpresaAddComponent,
	EmpresaEditComponent,
	EmpresasDetailComponent,
	DashboardComponent],
	providers: [appRoutingProviders],			  
	bootstrap:    [ AppComponent ]
})

export class AppModule { }