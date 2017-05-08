import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http"
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UbigeoService{

	constructor(private _http: Http){
	}

	getUbigeo(pCodigoPa: string, pCodigoNvl: string, pCodigo: string, pCodigoAsociado: string){
		return this._http.get("http://localhost:52234/Ubigeo/obtenerTodos/"+pCodigoPa+"/"+pCodigoNvl+"/"+pCodigo+"/"+pCodigoAsociado).map(res => res.json());
	}

	getAllDepartments(pPais: string){
		return this._http.get("http://localhost:52234/Ubigeo/obtenerTodosDepartamentos?pPais="+pPais).map(res => res.json());
	}

	getAllProvinces(pPais: string,pUbigeo: string){
		return this._http.get("http://localhost:52234/Ubigeo/obtenerTodasProvincias?pPais="+pPais+"&pUbigeo="+pUbigeo).map(res => res.json());
	}

	getAllDistricts(pPais: string,pUbigeo: string){
		return this._http.get("http://localhost:52234/Ubigeo/obtenerTodosDistritos?pPais="+pPais+"&pUbigeo="+pUbigeo).map(res => res.json());
	}

    getLocationById(pUbigeo:string,pParametro: string){
        return this._http.get("http://localhost:52234/Ubigeo/obtenerUbicacion?pUbigeo="+pUbigeo+"&pParametro="+pParametro).map(res => res.json());
    }

////////////////////





}