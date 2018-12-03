import { Component, OnInit } from "@angular/core"
import { MenuService } from "../../services/menu.service";
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal } from "../../modals";
import { SignUpService } from "../../services/signUp.service";
import { ServerResponse, User } from "../../models/models";


@Component({
    selector: "app-slide-nav",
    templateUrl: "slide-nav.component.html",
    styleUrls: ["slide-nav.component.scss"]
})

export class SlideNawComponent implements OnInit {

    public showLangualeMenu: boolean = false;
    public showLoginMenu: boolean = false;
    public languageItem: Array<any> = [
        { name: "Englis", image: 'assets/images/english.png' },
        { name: "Pусский", image: 'assets/images/russion.jpg' }

    ]

    constructor(private _menuService: MenuService, private dialog: MatDialog, public signUpService: SignUpService) { }

    ngOnInit() {
     this._getUserInfo();
    }


    public closeMenu() {
        this._menuService.closeMenu();
    }
    public showLanguage() {
        this.showLangualeMenu = !this.showLangualeMenu;

    }

    public showLogin() {
        this.showLoginMenu = !this.showLoginMenu;
    }

    public onClickedOutside(e: Event) {
        this.showLangualeMenu = false;
    }

    public onClickedOutsideLoginMenu(e: Event) {
        this.showLoginMenu = false;
    }

    public openLoginDialog(): void {
        const dialogRef = this.dialog.open(LoginModal, {
            width: " 354px",
            height: " 291px",
        })
    }
    public openDialogPhoneNumber(): void {
        const dialogRef = this.dialog.open(PhoneNumberModal, {
            width: " 354px",
            height: " 291px",
        })
    }


    private _getUserInfo() {
        this.signUpService.getUserInfo().subscribe();
}
}
