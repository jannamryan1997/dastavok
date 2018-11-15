import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../../services";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {

    public count:number=0;

    constructor(public menuItemsService: MenuItemsService,private router:Router) {
       // console.log(this.router.url.split('/'));
     
    }


    ngOnInit() {}
}