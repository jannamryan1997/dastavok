import { Component, OnInit } from "@angular/core"
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpService } from "../../services/signUp.service";
import { Router } from "@angular/router";
import { ServerResponse, LoginResponse } from "../../models/models";
import { PhoneNumberModal } from "../phone-number/phone-number.modal";
import { CookieService } from "ngx-cookie";


@Component({
    selector: "app-login",
    templateUrl: "login.modal.html",
    styleUrls: ["login.modal.scss"]
})

export class LoginModal implements OnInit {
    public loading: boolean = false;
    public loginForm: FormGroup;
    public error: string;
    public show: boolean = false;

    constructor(public dialog: MatDialog,
        private dialogRef: MatDialogRef<LoginModal>,
        private signUpService: SignUpService,
        private router: Router,
        private _cookieService: CookieService,


    ) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder() {
        this.loginForm = new FormBuilder().group({
            userName: ["karen1", Validators.required],
            password: ["123456", Validators.required]
        })
    }

    public loginClient() {
        this.loading = true;
        this.loginForm.disable();
        this.signUpService.loginClient({
            "userName": this.loginForm.value.userName,
            "password": this.loginForm.value.password,

        }).subscribe((data: ServerResponse<LoginResponse>) => {
            this.loading = false;
            this._cookieService.put("refreshToken", data.data.refreshToken);
            this._cookieService.put('token', data.data.token);
            this.loginForm.enable();
            this.dialogRef.close();
        },
            err => {
                this.error = err.error.error;
                this.loading = false;
                this.loginForm.enable();
            })

    }

    public onClickForgotPassword(): void {
        this._openPhoneNumberModal();
    }

    private _openPhoneNumberModal(): void {
        const dialogRef = this.dialog.open(PhoneNumberModal, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
            data: {
                key: 'forgot_password'
            }
        })
    }

    public checkIsValid(controlName): boolean {
        return this.loginForm.get(controlName).hasError('required') && this.loginForm.get(controlName).touched;
    }

    public showPassword(): void {
        this.show = !this.show;
    }
}