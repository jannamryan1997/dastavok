import { Component, OnInit } from "@angular/core"
import { MenuService } from "../../services/menu.service";
import { ClickOutsideModule } from 'ng-click-outside';
@Component({
    selector: "app-slide-nav",
    templateUrl: "slide-nav.component.html",
    styleUrls: ["slide-nav.component.scss"]
})

export class SlideNawComponent implements OnInit {

    public showLangualeMenu: boolean = false;
    public languageItem: Array<any> = [
        { name: "Englis", image: 'assets/images/english.png' },
        { name: "Pусский", image: 'assets/images/russion.jpg' }

    ]

    constructor(private _menuService: MenuService) { }

    ngOnInit() { }


    public closeMenu() {
        this._menuService.closeMenu();
    }
    public showLanguage() {

        this.showLangualeMenu = !this.showLangualeMenu;


    }

 /* public  onClickedOutside(e: Event) {
    this.showLangualeMenu=false;
    console.log("gi");
    
      }*/

}