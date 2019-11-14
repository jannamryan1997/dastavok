import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { VerificationModal } from "../verification/verification.modal";
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from 'ngx-cookie';
import { PhoneVerification, ServerResponse } from "../../models/models";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "app-phonenumber",
    templateUrl: "phone-number.modal.html",
    styleUrls: ["phone-number.modal.scss"]
})

export class PhoneNumberModal implements OnInit, OnDestroy {
    public loading: boolean = false;
    public phoneNumberForm: FormGroup;
    public error: string;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<PhoneNumberModal>,
        public dialog: MatDialog,
        private signUpService: SignUpService,
        private cookieService: CookieService
    ) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder() {
        this.phoneNumberForm = new FormBuilder().group({
            phonenumber: ["", Validators.required]
        })
    }

    public closePhoneModal(): void {
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
            })
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<PhoneVerification>) => {
                    this.loading = false;
                    this.phoneNumberForm.enable();
                    this.cookieService.put('phone_token', data.data.token);
                    this.openVerificationModal('registration');
                },
                err => {
                    this.error = err.error.error;
                    this.loading = false;
                    this.phoneNumberForm.enable();
                })
            }
            if (this.data.key === 'forgot_password') {
                this.signUpService.forgetPasswordPhoneNumber({
                    "phoneNumber": this.phoneNumberForm.value.phonenumber
                })
                .pipe(takeUntil(this._unsubscribe$))
                .subscribe((data: ServerResponse<PhoneVerification>) => {
                    this.loading = false;
                    this.cookieService.put('forgot_token', data.data.token)
                    this.openVerificationModal('forgot_password');
                    this.phoneNumberForm.enable();
                },
                    err => {

                        this.error = err.error.error;
                        this.loading = false;
                        this.phoneNumberForm.enable();

                    })
            }
        


    }

    public checkIsValid(controlName): boolean {
        return this.phoneNumberForm.get(controlName).hasError('required') && this.phoneNumberForm.get(controlName).touched;
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}



