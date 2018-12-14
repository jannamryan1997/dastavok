import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal, RegistrationStep } from "../../modals";
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { MenuService } from "../../services/menu.service";


@Component({
    selector: "app-toolbar",
    templateUrl: "toolbar.component.html",
    styleUrls: ["toolbar.component.scss"]
})

export class ToolbarComponent implements OnInit {

    public showlogin: boolean = false;
    public showUserProfileDisplay: boolean = false;
    public showLenguage: boolean = false;
    public languageItem: Array<any> = [
        { name: 'English', image: 'assets/images/english.png' },
        { name: 'Русский', image: 'assets/images/russion.jpg' }
    ]

    constructor(private dialog: MatDialog, public signUpService: SignUpService, private _cookieService: CookieService, private _menuService: MenuService) { }

    ngOnInit() {
        if (this.signUpService.isAuthorized == true) {
            this._getUserInfo();
        }

    }
    public openRegisterStep(): void {
        const dialogRef = this.dialog.open(RegistrationStep, {
            width: "686px",
           maxWidth: '100vw',
            panelClass: ['margin-10'],
        })
    }

    public showLoginSignup() {
        setTimeout(() => {
            this.showlogin = !this.showlogin;
        }, 1)

    }


    public openLoginModal(): void {
        const dialogRef = this.dialog.open(LoginModal, {
            width: "686px",
            height: "444px",
            panelClass: ['no-padding']
        })
    }

    public openPhoneNumberModal(): void {
        const dialogRef = this.dialog.open(PhoneNumberModal, {
            width: "686px",
            panelClass: ['no-padding'],
            data: {
                key: 'registration'
            }
        })
    }

    public onClickedOutside(e: Event) {
        this.showlogin = false;
    }

    public showUserProfile() {
        this.showUserProfileDisplay = !this.showUserProfileDisplay;
    }

    public showLanguage() {
        setTimeout(() => {
            this.showLenguage = !this.showLenguage;
        }, 1)
    }

    public onClickedOutsideLenguage(e: Event) {
        this.showLenguage = false;
    }

    private _getUserInfo() {
        this.signUpService.getUserInfo().subscribe();
    }

    public onClickedOutsideUserProfile() {
        this.showUserProfileDisplay = false;
    }

    public onClickLogOut(): void {
        this._removeCookies();
    }

    private _removeCookies(): void {
        this._cookieService.remove('token');
        this._cookieService.remove('refreshToken');
        window.location.reload();
    }

    public openMenu() {
        this._menuService.openMenu()
    }


}