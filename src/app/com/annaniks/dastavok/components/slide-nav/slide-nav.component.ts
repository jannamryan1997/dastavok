import { Component, OnInit, HostListener } from "@angular/core"
import { MenuService } from "../../services/menu.service";
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal } from "../../modals";
import { SignUpService } from "../../services/signUp.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-slide-nav",
    templateUrl: "slide-nav.component.html",
    styleUrls: ["slide-nav.component.scss"]
})

export class SlideNawComponent implements OnInit {
    @HostListener('window:resize', ['$event'])
    onresize($event) {
        if (window.innerWidth > 900 && this._menuService.isOpen) {
            this._menuService.closeMenu();
        }
    }
    public showLangualeMenu: boolean = false;
    public showLoginMenu: boolean = false;
    public languageItem: Array<any> = [
        { name: "Englis", image: 'assets/images/english.png' },
        { name: "Pусский", image: 'assets/images/russion.jpg' }

    ]

    constructor(private _menuService: MenuService, private dialog: MatDialog, public signUpService: SignUpService, private roter: Router) { }

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
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
        })
    }
    public openDialogPhoneNumber(key: string): void {
        const dialogRef = this.dialog.open(PhoneNumberModal, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
            data: {
                // phone: this.phoneNumberForm.value.phonenumber,
                key: 'registration'
            }
        })
    }


    private _getUserInfo() {
        this.signUpService.getUserInfo().subscribe();
    }
    public navToPage(route: string) {
        this._menuService.closeMenu();
        this.roter.navigate([route])
    }

  
}
