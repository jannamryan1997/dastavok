import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../services";
import { MenuService } from "../../services/menu.service";

@Component({
    selector: 'app-topbar',
    templateUrl: "topbar.component.html",
    styleUrls: ["topbar.component.scss"]
})

export class TopbarComponent implements OnInit {

    constructor(public menuItemsService: MenuItemsService, private _menuService: MenuService) { }

    ngOnInit() {


    }


    public openFiltersMenu() {
        this._menuService.openFitersMenu();

    }

    public onClickedOutside(e: Event) {
        this._menuService.closeFiltersMenu();
    }
}