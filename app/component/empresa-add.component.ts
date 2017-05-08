import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import {EmpresaService} from "../services/empresa.service";
import {IndustriaTipoService} from "../services/industriaTipo.service";
import {UbigeoService} from "../services/ubigeo.service";
import {Empresa} from "../model/empresa";
import {Ubigeo} from "../model/ubigeo";
declare var jQuery:any;
declare var $:any;

@Component({
  selector: "empresa-add",
  templateUrl: "app/view/empresa-add.html",
  providers:[EmpresaService,IndustriaTipoService,UbigeoService]
})

export class EmpresaAddComponent implements OnInit{

  public titulo = "Empresa";
  public industriasTipo: Object[];
  public status : string;
  public errorMessage : string;

  public empresa : Empresa;
  public lstUbigeo : Ubigeo[] = [];
  public direccion : string;


  public ubigeoPais : Ubigeo;
  public ubigeoDepartamento : Ubigeo;
  public ubigeoProvincia : Ubigeo;
  public ubigeoDistrito : Ubigeo;

  public lstUbigeoPais : Ubigeo[];
  public lstUbigeoDepartamento : Ubigeo[];
  public lstUbigeoProvincia : Ubigeo[];
  public lstUbigeoDistrito : Ubigeo[];




  constructor(
    private _empresaService : EmpresaService,
    private _industriaTipoService : IndustriaTipoService,
    private _ubigeoService : UbigeoService,
    private _route: ActivatedRoute,
    private _router : Router
    ){}
  
  ngOnInit(){
    console.log("Component EmpresaAddComponent Cargado");
    this.getIndustriasTipo();
    this.getDepartamentos();
    this.empresa=new Empresa(0,"","",0,"","",null);
    this.ubigeoDepartamento = null
    this.ubigeoProvincia = null
    this.ubigeoDistrito = null
  }

  getIndustriasTipo(){
    this._industriaTipoService.getIndustriasTipo().subscribe(
      result =>{
        this.industriasTipo = result.data;
        this.status = result.status;

        if(this.status!=="success"){
          alert("Error en el servidor")
        }

      }, error =>{
        this.errorMessage = <any>error;
        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición")
        }
      }
      );
  }

  getDepartamentos(){
    this._ubigeoService.getAllDepartments("604").subscribe(
      result =>{
        this.lstUbigeoDepartamento = result.data;
        this.status = result.status;

        if(this.status!=="success"){
          alert("Error en el servidor")
        }

      }, error =>{
        this.errorMessage = <any>error;
        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición")
        }
      }
      );
  }
  onChangeDepartamento(pUbigeo){
    this.getProvincias(pUbigeo)
    this.ubigeoProvincia = null
    this.ubigeoDistrito = null
    this.lstUbigeoDistrito = []
  }

  getProvincias(pUbigeo){
    this._ubigeoService.getAllProvinces("604",pUbigeo.ubigeoCodigo).subscribe(
      result =>{
        this.lstUbigeoProvincia = result.data;
        this.status = result.status;

        if(this.status!=="success"){
          alert("Error en el servidor")
        }

      }, error =>{
        this.errorMessage = <any>error;
        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición")
        }
      }
      );

  }


   onChangeProvincia(pUbigeo){
    this.getDistritos(pUbigeo)
    this.ubigeoDistrito = null
  }

  getDistritos(pUbigeo){
    this._ubigeoService.getAllDistricts("604",pUbigeo.ubigeoCodigo).subscribe(
      result =>{
        this.lstUbigeoDistrito = result.data;
        this.status = result.status;

        if(this.status!=="success"){
          alert("Error en el servidor")
        }

      }, error =>{
        this.errorMessage = <any>error;
        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición")
        }
      }
      );

  }


  onAgregarUbigeo(){
    let newUbigeo : Ubigeo 
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

     this.lstUbigeo.push(newUbigeo)  

    $('#myModalUbigeo').modal('hide');   
    //}

    
  }

  onEliminarUbigeo(ubigeo){
     var index = this.lstUbigeo.indexOf(ubigeo);
     this.lstUbigeo.splice(index, 1);
  }

  onMostrarUbigeo(ubigeo:Ubigeo){
/*
     this.ubigeoDepartamento.CODIGO = ubigeo.CODIGO_DEPARTAMENTO
     this.ubigeoDepartamento.NOMBRE = ubigeo.NOMBRE_DEPARTAMENTO
     
     this.ubigeoProvincia.CODIGO = ubigeo.CODIGO_PROVINCIA
     this.ubigeoProvincia.NOMBRE = ubigeo.NOMBRE_PROVINCIA

     this.ubigeoDistrito.CODIGO = ubigeo.CODIGO
     this.ubigeoDistrito.NOMBRE = ubigeo.NOMBRE

     this.direccion = ubigeo.DIRECCION
     */

  }


  onSubmit(){

    this._empresaService.addEmpresa(this.empresa).subscribe(
      result =>{
        this.status = result.status;

        if(this.status!=="success"){
          alert("Error en el servidor");
        }else{
          alert("Se registro correctamente");
        }

      }, error =>{
        this.errorMessage = <any>error;
        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición")
        }
      }
      );

    this._router.navigate(["/dashboard/lista-empresa"]);

  }

}