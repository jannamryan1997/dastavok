import { Injectable } from "@angular/core";

@Injectable()

export class MenuService {

    public isOpen: boolean;
    public isOpenFilter: boolean;
    body;

    constructor() {
        this.body = document.getElementById('body');
    }

    public openMenu() {
        this.isOpen = true;
        this.isOpenFilter = false;
        console.log(this.body.style.overflowY);
        this.body.style.overflowY = "hidden";
    }

    public closeMenu() {
        this.isOpen = false;
        this.body.style.overflowY = "auto";
    }

    public openFitersMenu() {
        this.isOpenFilter = true;
        this.isOpen = false;

    }

    public closeFiltersMenu() {
        this.isOpenFilter = false;


    }

}