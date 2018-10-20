import {Component, OnInit} from "@angular/core"

@Component({
    selector:"app-menu",
    templateUrl:"left-menu.component.html",
    styleUrls:["left-menu.component.scss"]
})

export class LeftMenuComponent implements OnInit{
public menuItem:Array<object>=[
    {label:"Restrant_",routerLink:"/home/restaurant"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},
    {label:"Restrant_",routerLink: "#"},

    
]
    constructor(){}
    ngOnInit(){

    }
}