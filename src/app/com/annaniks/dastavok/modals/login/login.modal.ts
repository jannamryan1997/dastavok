import { Component, OnInit } from "@angular/core"
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpService } from "../../services/signUp.service";
import { Router } from "@angular/router";




@Component({
    selector: "app-login",
    templateUrl: "login.modal.html",
    styleUrls: ["login.modal.scss"]
})

export class LoginModal implements OnInit {
    public loginForm: FormGroup;

    constructor(public dialog: MatDialog, private dialogRef:MatDialogRef<LoginModal>, private signUpService:SignUpService,private router:Router) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder() {
        this.loginForm = new FormBuilder().group({
            userName: ["", Validators.required],
            password: ["", Validators.required]
        })
    }

    public loginClient(){
        this.signUpService.loginClient({
            "userName":this.loginForm.value.userName,
            "password":this.loginForm.value.password
        }).subscribe((data)=>{
            this.dialogRef.close()
            this.router.navigate(["/home/restaurant"])
            console.log(data);
            
        },
        err=>{
            console.log(err);
            
        })
    }

}