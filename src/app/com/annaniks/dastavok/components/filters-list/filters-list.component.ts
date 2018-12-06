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
    public displayValue: boolean;


    constructor(public menuService: MenuService, private router: Router) { }

    ngOnInit() {
        for (let i = 1; i < 35; i++) {
            this.menuItem.push({ label: "filter_" + i, routerLink: "/home/restaurant/" + i, checked: false })
        }
    }

    public routerRestaurant(item) {
        this.arry.push(item.label);
    
        this.menuService.closeFiltersMenu();
        this.setDisplayValue();
        this.router.navigate(['/home/information'], { queryParams: { filter: JSON.stringify(item) } })
        // if (item.checked) {
        //     this.router.navigate(["/contact"], { queryParams: { filter: JSON.stringify(item) } })
        // }
    }
    public setDisplayValue() {
    }
}