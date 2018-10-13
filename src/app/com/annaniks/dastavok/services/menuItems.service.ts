import { Injectable } from "@angular/core"
import { MenuItem } from "../models/models";

@Injectable()

export class MenuItemsService {
    private _menuItems: Array<MenuItem> = [
        { label: "HOME", routerLink: "/home" },
        { label: "CONTACT", routerLink: "#" }
    ]

    private _homeContentItems: Array<MenuItem> = [
        { label: "SHOP", routerLink: "#" },
        { label: "RESTRANT", routerLink: "/home/restaurant" },
        { label: "ALL", routerLink: "#" }

    ]

    constructor() { }

    public getMenuItems(): Array<MenuItem> {
        return this._menuItems;
    }

    public getHomeContentItems(): Array<MenuItem> {
        return this._homeContentItems;
    }
}