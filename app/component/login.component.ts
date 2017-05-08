import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import {AutenticacionService} from "../services/autenticacion.service";
import {Usuario} from "../model/usuario";


@Component({
  selector : "login",
  templateUrl : "app/view/login.html",
  providers : [AutenticacionService]
})

export class LoginComponent implements OnInit{

  public usuario : Usuario;
  public status : string;
  public errorMessage : string;

 constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _autenticacionService : AutenticacionService){
  }

  ngOnInit(){
    console.log("login console");
    this._autenticacionService.logout();
    this.usuario = new Usuario("","","");
  }

  login(){
    this._autenticacionService.login(this.usuario).subscribe(
      result =>{
        this.status = result.status;

        if(this.status!=="success"){
          alert("Error en el servidor");
        }else{
           let user = result.data;
           let a = JSON.stringify(user)
           localStorage.setItem('currentUser', JSON.stringify(user));
           this._router.navigate(["/dashboard"]);

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


}