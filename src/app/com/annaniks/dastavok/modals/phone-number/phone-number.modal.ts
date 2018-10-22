import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { VerificationModal } from "..";
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: "app-phonenumber",
    templateUrl: "phone-number.modal.html",
    styleUrls: ["phone-number.modal.scss"]
})

export class PhoneNumberModal implements OnInit {

    public phoneNumberForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<PhoneNumberModal>, public dialog: MatDialog, private signUpService: SignUpService, private cookieService: CookieService) { }

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

    public openVerificationModal(): void {
        const dialogRef = this.dialog.open(VerificationModal, {
            width: "686px",
            height: "444px",
            panelClass: ['no-padding'],
            data: {
                phone: this.phoneNumberForm.value.phonenumber
            }
        })


    }

    postPhoneNumber() {
        this.signUpService.clientPhoneNumber({
            "phoneNumber": this.phoneNumberForm.value.phonenumber
        }).subscribe((data: any) => {
            this.cookieService.put('token', data.data.token)
            this.openVerificationModal();
            console.log(data);

        }),
            err => {
                console.log(err);

            }
        console.log(this.phoneNumberForm.value.phonenumber);
    }



}