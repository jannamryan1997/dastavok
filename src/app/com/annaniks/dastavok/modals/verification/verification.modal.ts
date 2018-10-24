import { Component, OnInit, Inject } from "@angular/core"
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpModal } from "../signUp/signUp.modal";
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { NewPasswordModals } from "../new-passwors/new-password.modal";

@Component({
    selector: "app-verification",
    templateUrl: "verification.modal.html",
    styleUrls: ["verification.modal.scss"]
})

export class VerificationModal implements OnInit {
    public verificationForm: FormGroup;
    private controlsItems: string;
    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialoRef: MatDialogRef<VerificationModal>, private signUpService: SignUpService, private dialog: MatDialog,
        private cookieService: CookieService) { }

    ngOnInit() {
        this._formBuilder();
    }

    public dialogClose() {
        this.dialoRef.close();


    }

    private _formBuilder() {
        this.verificationForm = new FormBuilder().group({
            control_1: ["", Validators.required],
            control_2: ["", Validators.required],
            control_3: ["", Validators.required],
            control_4: ["", Validators.required],
        })
    }

    public closeVerification() {
        this.dialoRef.close();
    }

    public openSignUpModalModal(): void {

        const dialoRef = this.dialog.open(SignUpModal, {
            width: "686px",
            height: "631.1px",
            panelClass: ['no-padding']
        })
    }
    public openNewPasswordModal(): void {
        const dialoRef = this.dialog.open(NewPasswordModals, {
            width: "686px",
            height: "631.1px",
            panelClass: ['no-padding']
        })
    }
    postVerification() {
        this.controlsItems = this.verificationForm.value.control_1 + this.verificationForm.value.control_2 +
            this.verificationForm.value.control_3 + this.verificationForm.value.control_4;
        if (this.data.key == "registration") {


            this.signUpService.clientVerification({
                "phoneNumber": this.data.phone,
                "verifyCode": parseInt(this.controlsItems)
            }).subscribe((data: any) => {
                this.cookieService.put("verificationtoken", data.data.token)


                this.openSignUpModalModal();
                console.log(data);

            }, (err) => {
                console.log(err);

            })
        }
        if (this.data.key == "forgot_password") {
            console.log("forget");

            this.signUpService.forgetPasswordVerification({
                "phoneNumber": this.data.phone,
                "verifyCode": +(this.controlsItems)
            }).subscribe((data: any) => {
                this.cookieService.put("forgot_token", data.data.token)
                this.openNewPasswordModal();
                console.log(data);

            },
                err => {
                    console.log(err);

                })

        }
    }

}