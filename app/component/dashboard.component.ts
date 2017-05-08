import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import {Usuario} from "../model/usuario";


@Component({
  selector : "dashboard",
  templateUrl : "app/view/menu.html"
})

export class DashboardComponent implements OnInit{
 public currentUser: Usuario;
 public titulo:string = "GBWeb" ;

 constructor(
    private _route: ActivatedRoute,
    private _router : Router){
 	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(){
    console.log("DashboardComponent console");
  }

}