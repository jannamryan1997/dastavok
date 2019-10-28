import { Injectable } from "@angular/core"
import { MenuItem } from "../models/models";
import { TranslateService } from "@ngx-translate/core";

@Injectable()

export class MenuItemsService {
    private _menuItems: Array<MenuItem> = [
        { label: "home", routerLink: "/"},
        { label: "contact", routerLink: "/contact" },
    ]

    constructor(private _translateService:TranslateService) { }

    public getMenuItems(): Array<MenuItem> {
        return this._menuItems;
    }

}