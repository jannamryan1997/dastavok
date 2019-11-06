import { Component, OnInit } from "@angular/core"
import { Validators, FormGroup, FormBuilder } from "@angular/forms"
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from "ngx-cookie";
import { ServerResponse, PhoneVerification, Verification } from "../../models/models";
import { MatDialogRef } from "@angular/material";
import { Subject, timer, interval, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "app-registration-step",
    templateUrl: "registration-step.modal.html",
    styleUrls: ["registration-step.modal.scss"]
})
export class RegistrationStep implements OnInit {

    public phoneNumberForm: FormGroup;
    public verificationForm: FormGroup;
    public signUpForm: FormGroup;
    public tab: number = 1;
    public controlsItems: string;
    public disabled: boolean = false;
    public loading: boolean = false;
    public error: string;
    public minute: number = 2;
    public secend: number = 0;
    public time: string;
    public show: boolean = false;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    private _intervalSubscription: Subscription = new Subscription();
    private _clientVerificationSubscription: Subscription = new Subscription();
    private _signUpClientSubscription: Subscription = new Subscription();

    constructor(
        private _signUpService: SignUpService,
        private _cookieService: CookieService,
        private dialogRef: MatDialogRef<RegistrationStep>,
        private _fb: FormBuilder
    ) { }

    ngOnInit() {
        this._formBuilder();
    }

    private matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

    private _startTimer(): void {
        this._intervalSubscription.unsubscribe();
        this.time = undefined;
        this.minute = 2;
        this.secend = 0;
        this._intervalSubscription = interval(1000).subscribe(() => {
            if (this.secend == 0 && this.minute == 0) {
                this._intervalSubscription.unsubscribe();
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
        })
    }

    private _formBuilder() {
        this.phoneNumberForm = this._fb.group({
            phonenumber: ["", Validators.required]
        })
    }

    private _formBuilderVerification() {
        this.verificationForm = this._fb.group({
            control_1: ["", [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
            control_2: ["", [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
            control_3: ["", [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
            control_4: ["", [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
        })
    }

    private _formBuilderSignUpForm() {
        this.signUpForm = this._fb.group({
            user_name: [null, Validators.required],
            full_name: [null, Validators.required],
            password: [null, Validators.required],
            confirm_password: [null, Validators.required]
        },
            { validator: this.matchingPasswords('password', 'confirm_password') }
        )

    }

    public nextStep(): void {
        if (this.tab == 1) {
            this._clientPhoneNumber();
        }

        if (this.tab == 2) {
            this._clientVerification();
        }
        if (this.tab == 3) {
            this._signUpClient();
        }
    }

    public back(): void {
        if (this.tab == 2) {
            this._clientVerificationSubscription.unsubscribe();
        }
        if (this.tab == 3) {
            this._signUpClientSubscription.unsubscribe();
        }
        this.tab = this.tab - 1;
    }

    private _clientPhoneNumber() {
        this.loading = true;
        this.phoneNumberForm.disable();
        this._signUpService.clientPhoneNumber({
            "phoneNumber": this.phoneNumberForm.value.phonenumber,
        })
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<PhoneVerification>) => {
                this.loading = false;
                this.phoneNumberForm.enable();
                this._formBuilderVerification();
                this.tab = this.tab + 1;
                this._startTimer();
                this._cookieService.put('phone_token', data.data.token);
            },
                err => {
                    this.error = err.error.error;
                    this.loading = false;
                    this.phoneNumberForm.enable();
                }
            );

    }

    private _clientVerification() {
        this.loading = true;
        this.phoneNumberForm.disable();
        this.controlsItems = this.verificationForm.value.control_1 + this.verificationForm.value.control_2 +
            this.verificationForm.value.control_3 + this.verificationForm.value.control_4;
        this._clientVerificationSubscription = this._signUpService.clientVerification({
            "phoneNumber": this.phoneNumberForm.value.phonenumber,
            "verifyCode": parseInt(this.controlsItems),
        })
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<Verification>) => {
                this.loading = false;
                this.phoneNumberForm.enable();
                this._cookieService.put("refreshToken", data.data.refreshToken);
                this._cookieService.put('token', data.data.token);
                this._formBuilderSignUpForm();
                this._signUpService.isAuthorized = true;
                this.tab = this.tab + 1;
                this.error="";
            },
                err => {
                    this.error = err.error.error;
                    this.loading = false;
                    this.phoneNumberForm.enable();
                }
            )

    }

    private _signUpClient() {
        this.loading = true;
        this.phoneNumberForm.disable();
        this._signUpClientSubscription = this._signUpService.signUpClient({
            "userName": this.signUpForm.value.user_name,
            "fullName": this.signUpForm.value.full_name,
            "password": this.signUpForm.value.password,
        })
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                this.loading = false;
                this.phoneNumberForm.enable();
                this.dialogRef.close();
                this.error="";
            }),
            err => {
                this.error = err.error.error;
                this.loading = false;
                this.phoneNumberForm.enable();
            }
    }

    public checkIsValid(controlName: string): boolean {
        if (this.tab == 1) {
            return this.phoneNumberForm.get(controlName).hasError('required') && this.phoneNumberForm.get(controlName).touched;
        }
        else if (this.tab == 2) {
            return (this.verificationForm.get(controlName).hasError('required') && this.verificationForm.get(controlName).touched) || this.verificationForm.get(controlName).hasError('maxlength') || this.verificationForm.get(controlName).hasError('minlength');
        }

        else if (this.tab == 3) {
            return this.signUpForm.get(controlName).hasError('required') && this.signUpForm.get(controlName).touched;
        }
    }

    public showPassword(): void {
        this.show = !this.show;
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
        this._intervalSubscription.unsubscribe();
    }
}