import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal } from "../../modals";
import { SignUpService } from "../../services/signUp.service";
import { ApiService } from "../../services/api.service";

@Component({
    selector: "app-toolbar",
    templateUrl: "toolbar.component.html",
    styleUrls: ["toolbar.component.scss"]
})

export class ToolbarComponent implements OnInit {

    public showlogin: boolean = false;
    public showUserProfileDisplay: boolean = false;

    constructor(private dialog: MatDialog, public signUpService: SignUpService, private _apiService: ApiService) { }

    ngOnInit() {
       // this._getUserInfo()
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
            height: "444px",
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

    private _getUserInfo() {
        this._apiService.getUserInfo().subscribe((data) => {
            console.log(data);

        }, err => {
            console.log(err);

        })
    }



}