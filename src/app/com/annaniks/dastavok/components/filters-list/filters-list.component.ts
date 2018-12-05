import { Component, OnInit } from "@angular/core"
import { MenuService } from "../../services/menu.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-filters-list",
    templateUrl: "filters-list.component.html",
    styleUrls: ["filters-list.component.scss"]
})

export class FiltersListComponent implements OnInit {

    public menuItem: Array<object> = [];
    public showFiltersMenu: boolean = false;
    public arry: Array<any> = [];
    public displayValue: string;


    constructor(public menuService: MenuService, private router: Router) { }

    ngOnInit() {
        for (let i = 1; i < 35; i++) {
            this.menuItem.push({ label: "filter_" + i, routerLink: "/home/restaurant/" + i, checked: false })
        }
    }

    public routerRestaurant(item) {
        this.arry.push(item.label);
        //this.menuService.closeFiltersMenu();
        //this.setDisplayValue();
        if (item.checked) {
            this.router.navigate([], { queryParams: { filter: JSON.stringify(this.arry) } })
        }

    }

    public setDisplayValue() {
        console.log(event);

    }
}