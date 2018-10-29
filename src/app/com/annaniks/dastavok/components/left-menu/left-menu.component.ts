import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-menu",
    templateUrl: "left-menu.component.html",
    styleUrls: ["left-menu.component.scss"]
})

export class LeftMenuComponent implements OnInit {
    public menuItem: Array<object> = []
    constructor() { }
    ngOnInit() {
        for (let i = 1; i < 35; i++) {
            this.menuItem.push({ label: "Restrant_" + i, routerLink: "/home/restaurant/" + i })
        }
    }
}