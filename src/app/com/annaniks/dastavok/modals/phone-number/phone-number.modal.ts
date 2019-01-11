import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { VerificationModal } from "../verification/verification.modal";
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { PhoneVerification, ServerResponse } from "../../models/models";

@Component({
    selector: "app-phonenumber",
    templateUrl: "phone-number.modal.html",
    styleUrls: ["phone-number.modal.scss"]
})

export class PhoneNumberModal implements OnInit {
    public loading: boolean = false;
    public phoneNumberForm: FormGroup;
    public error: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PhoneNumberModal>, public dialog: MatDialog, private signUpService: SignUpService, private cookieService: CookieService) { }

    ngOnInit() {
        this._formBuilder();

    }

    private _formBuilder() {
        this.phoneNumberForm = new FormBuilder().group({
            phonenumber: ["+37494598259", Validators.required]
        })
    }

    public closePhoneModal() {
        this.dialogRef.close();
    }

    public openVerificationModal(key: string): void {
        const dialogRef = this.dialog.open(VerificationModal, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
            data: {
                phone: this.phoneNumberForm.value.phonenumber,
                key: key,
            }

        })


    }

    public postPhoneNumber() {
        this.loading = true;
        this.phoneNumberForm.disable();
        if (this.data.key == "registration") {

            this.signUpService.clientPhoneNumber({
                "phoneNumber": this.phoneNumberForm.value.phonenumber
            }).subscribe(
                (data: ServerResponse<PhoneVerification>) => {
                    this.loading = false;
                    this.phoneNumberForm.enable();
                    this.cookieService.put('phone_token', data.data.token);
                    this.openVerificationModal('registration');
                },
                err => {
                    this.error=err.error.error;
                    this.loading = false;
                    this.phoneNumberForm.enable();
                    this.error=err.error.error;
                })

            if (this.data.key === 'forgot_password') {
                this.signUpService.forgetPasswordPhoneNumber({
                    "phoneNumber": this.phoneNumberForm.value.phonenumber
                }).subscribe((data: ServerResponse<PhoneVerification>) => {
                    this.loading = false;
                    this.cookieService.put('forgot_token', data.data.token)
                    this.openVerificationModal('forgot_password');
                    this.phoneNumberForm.enable();
                },
                    err => {
            
                        this.error=err.error.error;
                        this.loading = false;
                        this.phoneNumberForm.enable();
                        
                    })
            }
        }

    }
}



