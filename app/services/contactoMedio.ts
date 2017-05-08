import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http"
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactoMedioService{

	constructor(private _http: Http){
	}

	getContactosMedio(){
    return this._http.get("http://localhost:52234/ContactoMedio/obtenerTodos").map(res => res.json());
    }
    

}