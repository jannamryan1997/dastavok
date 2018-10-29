import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../services";

@Component({
    selector: 'app-topbar',
    templateUrl: "topbar.component.html",
    styleUrls: ["topbar.component.scss"]
})

export class TopbarComponent implements OnInit {

    constructor(public menuItemsService: MenuItemsService) { }

    ngOnInit() { }
}