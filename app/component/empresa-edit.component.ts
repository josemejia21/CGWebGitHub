import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import {EmpresaService} from "../services/empresa.service";
import {IndustriaTipoService} from "../services/industriaTipo.service";
import {UbigeoService} from "../services/ubigeo.service";
import {Empresa} from "../model/empresa";
import {EmpresaAtributo} from "../model/empresaAtributo";
import {Ubigeo} from "../model/ubigeo";
import {Atributo} from "../model/atributo";

@Component({
  selector: "empresa-add",
  templateUrl: "app/view/empresa-add.html",
  providers:[EmpresaService,IndustriaTipoService,UbigeoService]
})

export class EmpresaEditComponent implements OnInit{

  public titulo = "Editar Empresa";
  public industriasTipo: Object[];
  public status : string;
  public errorMessage : string;
  public empresa : Empresa;
  public lstUbigeo : Ubigeo[] = [];
  public lstAtributos : Atributo[] = [];

  public empresaAtributos : EmpresaAtributo[]=[];


  constructor(
    private _empresaService : EmpresaService,
    private _industriaTipoService : IndustriaTipoService,
    private _ubigeoService : UbigeoService,
    private _route: ActivatedRoute,
    private _router : Router)
  {    
  }
  
  ngOnInit(){
    console.log("Component EmpresaEditComponent Cargado")
    this.getIndustriasTipo();
    this.empresa=new Empresa(0,"","",0,"","",null);
    this.getEmpresa();
    this.getEmpresaAtributos();
  }


  getEmpresa(){
    this._route.params.forEach((params: Params) =>{
      let id = params["id"];
      this._empresaService.getEmpresa(id).subscribe(
        result =>{
          this.empresa = result.data;
          this.status = result.status;
          if(this.status!=="success"){
            //alert("Error en el servidor")
            this._router.navigate(["/"]);
          }
        }, error =>{
          this.errorMessage = <any>error;
          if(this.errorMessage!=null){
            console.log(this.errorMessage);
            alert("Error en la petición")
          }
        }
        );
    })
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

  getEmpresaAtributos(){
    this._route.params.forEach((params: Params) =>{
      let id = params["id"];
      this._empresaService.getEmpresaAtributos(id).subscribe(
        result =>{
          this.empresaAtributos = result.data;
          this.status = result.status;
          if(this.status!=="success"){
            //alert("Error en el servidor")
            this._router.navigate(["/"]);
          }
          this.fillTables();
        }, error =>{
          this.errorMessage = <any>error;
          if(this.errorMessage!=null){
            console.log(this.errorMessage);
            alert("Error en la petición")
          }
        }
        );
    })
  }


  fillTables(){

    for (var i = 0; i < this.empresaAtributos.length; i ++) {
      let varEmpresaAtributo:EmpresaAtributo = this.empresaAtributos[i];

      if(varEmpresaAtributo.UBIGEO_ID != ""){
    
      }else{

      }

    }
  }


  







  onSubmit(){
    this._empresaService.editEmpresa(this.empresa).subscribe(
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