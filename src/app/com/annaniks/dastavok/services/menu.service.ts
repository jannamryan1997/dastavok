import { Injectable } from "@angular/core";

@Injectable()

export class MenuService {

    public isOpen: boolean;
    public isOpenFilter: boolean = false;

    constructor() { }

    public openMenu() {
        this.isOpen = true;
        this.isOpenFilter = false;
        document.getElementById('body').style.overflowY = "hidden";
    }

    public closeMenu() {
        this.isOpen = false;
        document.getElementById('body').style.overflowY = "auto";
    }

    public openFitersMenu() {
        this.isOpenFilter = !this.isOpenFilter;
        this.isOpen = false;
        if (this.isOpenFilter == true) {
            document.getElementById('body').style.overflowY = "hidden";
        }
    }

    public closeFiltersMenu() {
        this.isOpenFilter = false;
        if (this.isOpenFilter == false) {
            document.getElementById('body').style.overflowY = "auto";
        }
    }
}