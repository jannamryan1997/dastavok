import { Component, OnInit} from "@angular/core"
import { MatDialog, MatDialogRef} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpService } from "../../services/signUp.service";
import { Router } from "@angular/router";
import { ServerResponse, LoginResponse} from "../../models/models";
import { PhoneNumberModal } from "../phone-number/phone-number.modal";
import { CookieService } from "angular2-cookie/services/cookies.service";



@Component({
    selector: "app-login",
    templateUrl: "login.modal.html",
    styleUrls: ["login.modal.scss"]
})

export class LoginModal implements OnInit {
    public loading: boolean = false;
    public loginForm: FormGroup;
    public  error:string;

    constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<LoginModal>, private signUpService: SignUpService, private router: Router, private _cookieService: CookieService) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder() {
        this.loginForm = new FormBuilder().group({
            userName: ["", Validators.required],
            password: ["", Validators.required]
        })
    }

    public loginClient() {
        this.loading = true;
        this.loginForm.disable();
        this.signUpService.loginClient({
            "userName": this.loginForm.value.userName,
            "password": this.loginForm.value.password,

        }).subscribe((data: ServerResponse<LoginResponse>) => {
            console.log(data);
            
            this.loading = false;
            this._cookieService.put("refreshToken", data.data.refreshToken);
            this._cookieService.put('token', data.data.token);
            this.loginForm.enable();
            this.dialogRef.close();
            
           
        },
            err => {
                console.log(err,this.error);
                
                this.error=err.error.error;
                this.loading = false;
                this.loginForm.enable();
                console.log(err.data);
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

}