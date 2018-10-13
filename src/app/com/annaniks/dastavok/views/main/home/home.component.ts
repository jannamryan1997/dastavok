import {Component, OnInit} from "@angular/core" 
import { MenuItemsService } from "../../../services";

@Component({
    selector:"app-home",
    templateUrl:"home.component.html",
    styleUrls:["home.component.scss"]
})

export class HomeComponent implements OnInit{

    constructor(public menuItemsService:MenuItemsService){} 

    ngOnInit(){}
}