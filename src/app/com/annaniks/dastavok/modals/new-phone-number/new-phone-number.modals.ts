import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";
import { ProfileService } from "../../views/main/profile/profile.service";
import { VerificationModal } from "../verification/verification.modal";
import { CookieService } from "ngx-cookie";

@Component({
    selector: "app-new-phone-number",
    templateUrl: "new-phone-number.modals.html",
    styleUrls: ["new-phone-number.modals.scss"]
})

export class NewPhoneNumber implements OnInit {

    public phoneNumberForm: FormGroup;
    public loading: boolean = false;
    public error: string;

    constructor(
        private _dialogRef: MatDialogRef<NewPhoneNumber>,
        private _profileService: ProfileService,
        private _dialog: MatDialog,
        private _cookieService: CookieService) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder() {
        this.phoneNumberForm = new FormBuilder().group({
            phonenumber: ["", Validators.required]
        })
    }

    public closeNewPhoneNumberMoadal() {
        this._dialogRef.close();
    }

    public putClientNewPhoneNumberStepOne() {
        this._profileService.putClientNewPhoneNumberStepOne({
            phoneNumber: this.phoneNumberForm.value.phonenumber,
        }).subscribe((data: any) => {
            this._cookieService.put('newPhoneNumberToken', data.data.token)
            this._openVerificationModal();
            (data);
            this._dialogRef.close();

        });
        err => {
            this.error = err.error.error;
            this.phoneNumberForm.enable();
        }
    }

    private _openVerificationModal() {
        const dialogRef = this._dialog.open(VerificationModal, {
            width: "686px",
            height: "444px",
            data: {
                phoneNumber: this.phoneNumberForm.value.phonenumber,
                key: 'new-phone-number',
            }
        })
    }

    public checkIsValid(controlName: string): boolean {
        return this.phoneNumberForm.get(controlName).hasError('required') && this.phoneNumberForm.get(controlName).touched;
    }

}