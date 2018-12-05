import { Injectable } from "@angular/core";

@Injectable()

export class MenuService {

    public isOpen: boolean;
    body = document.getElementById('body')

    public openMenu() {
        this.isOpen = true;
        this.body.style.overflowY = "hidden";
        console.log(this.body)



    }

    public closeMenu() {
        this.isOpen = false;
        this.body.style.overflowY = "auto";
        console.log(this.body);

    }

}