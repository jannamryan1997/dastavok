import { Component, OnInit, HostListener } from "@angular/core"
import { MenuService } from "../../services/menu.service";
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal } from "../../modals";
import { SignUpService } from "../../services/signUp.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie";
import { SlideItem } from "../../models/models";

@Component({
    selector: "app-slide-nav",
    templateUrl: "slide-nav.component.html",
    styleUrls: ["slide-nav.component.scss"]
})

export class SlideNawComponent implements OnInit {
    @HostListener('window:resize', ['$event'])
    onresize($event) {
        if (window.innerWidth > 900 && this.menuService.isOpen) {
            this.menuService.closeMenu();
        }
    }
    public showLangualeMenu: boolean = false;
    public showLoginMenu: boolean = true;
    public languageItem: Array<any> = [
        { name: "Englis", image: 'assets/images/english.png' },
        { name: "Pусский", image: 'assets/images/russion.jpg' }

    ]
    
    public menuItem:SlideItem[]=[
        {icon:"home",link:"home",routerLink:'/'},
        {icon:"contacts",link:"contact",routerLink:'/contact'}
    ]
    constructor(public menuService: MenuService, private dialog: MatDialog, public signUpService: SignUpService, private roter: Router, private _cookieService: CookieService) { }

    ngOnInit() {
        if(this.signUpService.isAuthorized)
            this._getUserInfo();
    }


    public closeMenu() {
        this.menuService.closeMenu();
    }
    public showLanguage() {
        this.showLangualeMenu = !this.showLangualeMenu;

    }


    // public showLogin() {
    //     this.showLoginMenu = !this.showLoginMenu;
        
    // }

    public onClickedOutside(e: Event) {
        this.showLangualeMenu = false;
    }

    public onClickedOutsideLoginMenu(e: Event) {
        this.showLoginMenu = false;
    }

    public showLogin(): void {
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
        this.menuService.closeMenu();
        this.roter.navigate([route])
    }

    public logOut() {
        this._cookieService.remove('refreshToken');
        this._cookieService.remove('token');
        this.menuService.closeMenu();
        this.roter.navigate(['/'])
        this.signUpService.isAuthorized=false;
    }


}
