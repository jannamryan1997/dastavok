import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal } from "../../modals";

@Component({
    selector: "app-toolbar",
    templateUrl: "toolbar.component.html",
    styleUrls: ["toolbar.component.scss"]
})

export class ToolbarComponent implements OnInit {

    public showlogin: boolean = false;

    constructor(private dialog: MatDialog) { }

    ngOnInit() { }

    public showLoginSignup() {
        this.showlogin = !this.showlogin;
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
            panelClass: ['no-padding']
        })
    }

}