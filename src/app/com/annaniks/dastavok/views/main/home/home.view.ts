import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../../services";

@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {

    constructor(public menuItemsService: MenuItemsService) {
   

    }

    ngOnInit() { }
}