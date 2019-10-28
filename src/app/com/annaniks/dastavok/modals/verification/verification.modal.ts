import { Component, OnInit, Inject } from "@angular/core"
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpModal } from "../signUp/signUp.modal";
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { NewPasswordModals } from "../new-passwors/new-password.modal";
import { ProfileService } from "../../views/main/profile/profile.service";
import { PhoneVerification, ServerResponse } from "../../models/models";
import { locateHostElement } from "@angular/core/src/render3/instructions";

@Component({
    selector: "app-verification",
    templateUrl: "verification.modal.html",
    styleUrls: ["verification.modal.scss"]
})

export class VerificationModal implements OnInit {
    public verificationForm: FormGroup;
    public loading: boolean = false;
    private controlsItems: string;
    public minute: number = 2;
    public secend: number = 0;
    public time: string;
    public isTimerStopped: boolean = false;
    public interVal;
    public error: string;
    public timerStopped: boolean = true;
    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialoRef: MatDialogRef<VerificationModal>, private signUpService: SignUpService, private dialog: MatDialog,
        private cookieService: CookieService, private _profileService: ProfileService) { }

    ngOnInit() {
        this._formBuilder();
        this._timer();
    }

    private _timer() {
        this.isTimerStopped = false;
        this.timerStopped=true;
        this.minute = 2;
        this.secend = 0;
        clearInterval(this.interVal);
        this.interVal = setInterval(() => {
            if (this.secend == 0 && this.minute == 0) {
                this.isTimerStopped = true;
                return;
            }
            if (this.secend == 0) {
                this.secend = 59;
                this.minute--;
            }
            this.secend = this.secend - 1;
            if (this.secend < 10) {
                this.time = '0' + this.minute + ':0' + this.secend;
            }
            else {
                this.time = '0' + this.minute + ':' + this.secend;
            }
            if (this.minute == 0 && this.secend==0)
            this.timerStopped = false;
            (this.time);

        }, 1000)
   
            
    }

    private _formBuilder() {
        this.verificationForm = new FormBuilder().group({
            control_1: ["", Validators.required],
            control_2: ["", Validators.required],
            control_3: ["", Validators.required],
            control_4: ["", Validators.required],
        })
    }

    public openSignUpModalModal(): void {
        const dialoRef = this.dialog.open(SignUpModal, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],

        })
        dialoRef.afterClosed().subscribe((data) => {
            this.dialog.closeAll()
        })
    }
    public openNewPasswordModal(): void {
        const dialoRef = this.dialog.open(NewPasswordModals, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
        })
    }
    public postVerification() {
        this.loading = true;
        this.verificationForm.disable();
        this.controlsItems = this.verificationForm.value.control_1 + this.verificationForm.value.control_2 +
            this.verificationForm.value.control_3 + this.verificationForm.value.control_4;
        if (this.data.key == "registration") {
            this.signUpService.clientVerification({
                "phoneNumber": this.data.phone,
                "verifyCode": parseInt(this.controlsItems)
            }).subscribe(
                (data: any) => {
                    this.loading = false;
                    this.verificationForm.enable();
                    this.cookieService.put("verificationtoken", data.data.token)
                    this.openSignUpModalModal();
                }, (err) => {
                    this.loading = false;
                    this.verificationForm.enable();
                    this.error = err.error.error;
                })
        }

        if (this.data.key == "forgot_password")
            this.signUpService.forgetPasswordVerification({
                "phoneNumber": this.data.phone,
                "verifyCode": +(this.controlsItems)
            }).subscribe(
                (data: any) => {
                    this.loading = false;
                    this.verificationForm.enable();
                    this.cookieService.remove("forgot_token")
                    this.cookieService.put("verification_token", data.data.token)
                    this.openNewPasswordModal();
                },
                err => {
                    this.error = err.error.error;
                    this.loading = false;
                    this.verificationForm.enable();
                })
        if (this.data.key == "new-phone-number") {
            this._putClientNewPhoneNumberStepTwo();
        }

    }


    private _putClientNewPhoneNumberStepTwo() {

        this.controlsItems = this.verificationForm.value.control_1 + this.verificationForm.value.control_2 +
            this.verificationForm.value.control_3 + this.verificationForm.value.control_4;
        this._profileService.putClientNewPhoneNumberStepTwo({
            phoneNumber: this.data.phoneNumber,
            verifyCode: this.controlsItems,
        }).subscribe((data) => {
            this.cookieService.remove("newPhoneNumberToken")
        });
        err => {
            this.error = err.error.error;
        }
    }

    public getVerifivationCode() {
        this.signUpService.clientPhoneNumber({
            "phoneNumber": this.data.phone,
        }).subscribe((data: ServerResponse<PhoneVerification>) => {

            this._timer();
        })
    }

    public closeVerification() {
        this.dialoRef.close()
    }


    public checkIsValid(controlName:string):boolean{
        return this.verificationForm.get(controlName).hasError('required') && this.verificationForm.get(controlName).touched;
    }
}

