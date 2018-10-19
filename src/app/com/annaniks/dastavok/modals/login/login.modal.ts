import { Component, OnInit } from "@angular/core"
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PhoneNumberModal } from "..";



@Component({
    selector: "app-login",
    templateUrl: "login.modal.html",
    styleUrls: ["login.modal.scss"]
})

export class LoginModal implements OnInit {
    public loginForm: FormGroup;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder() {
        this.loginForm = new FormBuilder().group({
            "userName": ["", Validators.required],
            "password": ["", Validators.required]
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