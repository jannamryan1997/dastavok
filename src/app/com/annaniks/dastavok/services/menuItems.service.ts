import { Injectable } from "@angular/core"
import { MenuItem } from "../models/models";

@Injectable()

export class MenuItemsService {
    private _menuItems: Array<MenuItem> = [
        { label: "HOME", routerLink: "/"},
        { label: "CONTACT", routerLink: "/contact" },
    ]

    constructor() { }

    public getMenuItems(): Array<MenuItem> {
        return this._menuItems;
    }


}