import { Component, OnInit } from "@angular/core"
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VerificationModal } from "../verification/verification.modal";


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
    public openVerificationModal(): void {
        const dialogRef = this.dialog.open(VerificationModal, {
            width: "686px",
            height: "444px",
            panelClass: ['no-padding']
        })
    }
}