import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../../services";
import { SignUpService } from "../../../services/signUp.service";

@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {

    constructor(public menuItemsService: MenuItemsService,public signUpService:SignUpService) {}


    ngOnInit() {}
}