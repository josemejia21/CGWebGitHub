import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http"
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Usuario} from "../model/usuario";

@Injectable()
export class AutenticacionService{
  
constructor(private http: Http) { }
 
    login(pUsuario: Usuario) {
     let params = JSON.stringify({usuario:pUsuario});
     let headers = new Headers({"Content-Type":"application/json;charset=utf-8"});
     return this.http.post("http://localhost:52234/Usuario/ingresar/",params,{headers: headers}).map(res => res.json());
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}