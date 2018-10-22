import { Component, OnInit, Inject } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { SignUpService } from "../../services/signUp.service";
import { Router } from "@angular/router";

export interface DialogData {
    animal: string;
    name: string;
}
@Component({
    selector: "app-signUp",
    templateUrl: "signUp.modal.html",
    styleUrls: ["signUp.modal.scss"]
})
export class SignUpModal implements OnInit {
    public signUpForm: FormGroup;
    constructor(private dialogRef: MatDialogRef<SignUpModal>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private signUpService: SignUpService, private router: Router) { }

    ngOnInit() {
        this._formBuilder()


    }

    private _formBuilder() {
        this.signUpForm = new FormBuilder().group({
            user_name: ["", Validators.required],
            full_name: ["", Validators.required],
            password: ["", Validators.required],
            confirm_password: ["", Validators.required],
        })
    }
    public backVerificationModal() {
        this.dialogRef.close();
    }

    signUpClient() {
        this.signUpService.signUpClient({
            "userName": this.signUpForm.value.user_name,
            "fullName": this.signUpForm.value.full_name,
            "password": this.signUpForm.value.password,
        }).subscribe((data) => {
            this.dialogRef.close();
            this.router.navigate(["/contact"])
            console.log(data);

        }, err => {
            console.log(err);

        })
    }

}