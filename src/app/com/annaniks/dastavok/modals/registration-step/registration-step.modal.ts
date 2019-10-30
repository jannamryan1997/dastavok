import { Component, OnInit } from "@angular/core"
import { Validators, FormGroup, FormBuilder } from "@angular/forms"
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from "ngx-cookie";
import { ServerResponse, PhoneVerification, Verification } from "../../models/models";
import { MatDialogRef } from "@angular/material";

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
    public isTimerStopped: boolean = false;
    public interVal;
    public timerStopped: boolean = true;
    public show:boolean=false;

    constructor(private _signUpService: SignUpService, private _cookieService: CookieService, private dialogRef: MatDialogRef<RegistrationStep>) { }

    ngOnInit() {
        this._formBuilder();
        this.timer();
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

    timer() {
        setInterval(() => {
            this.isTimerStopped = false;
            if (this.secend == 0 && this.minute == 0) {
                return;
            }
            if (this.secend == 0) {
                this.secend = 59;
                this.minute--;
            }
            this.secend = this.secend - 1;
            if (this.secend < 10) {
                this.time = '0' + this.minute + ':0' + this.secend;
                this.isTimerStopped = true;
            }
            else {
                this.time = '0' + this.minute + ':' + this.secend;
            }

        }, 1000)
    }



    private _formBuilder() {
        this.phoneNumberForm = new FormBuilder().group({
            phonenumber: ["", Validators.required]
        })

    }

    private _formBuilderVerification() {
        this.verificationForm = new FormBuilder().group({
            control_1: ["", Validators.required],
            control_2: ["", Validators.required],
            control_3: ["", Validators.required],
            control_4: ["", Validators.required],
        })
    }

    private _formBuilderSignUpForm() {
        this.signUpForm = new FormBuilder().group({
            user_name: ["", Validators.required],
            full_name: ["", Validators.required],
            password: ["", Validators.required],
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
        console.log(this.tab);

    }
    public back() {
        this.tab = this.tab - 1;
    }

    private _clientPhoneNumber() {
        this.loading = true;
        this.phoneNumberForm.disable();
        this._signUpService.clientPhoneNumber({
            "phoneNumber": this.phoneNumberForm.value.phonenumber,
        }).subscribe((data: ServerResponse<PhoneVerification>) => {
            this.loading = false;
            this.phoneNumberForm.enable();
            this._formBuilderVerification();
            this.tab = this.tab + 1;
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
        this._signUpService.clientVerification({
            "phoneNumber": this.phoneNumberForm.value.phonenumber,
            "verifyCode": parseInt(this.controlsItems),
        }).subscribe((data: ServerResponse<Verification>) => {
            this.loading = false;
            this.phoneNumberForm.enable();
            this._cookieService.put("refreshToken", data.data.refreshToken);
            this._cookieService.put('token', data.data.token);
             this._formBuilderSignUpForm();
            this._signUpService.isAuthorized = true;
            this.tab = this.tab + 1;
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
        this._signUpService.signUpClient({
            "userName": this.signUpForm.value.user_name,
            "fullName": this.signUpForm.value.full_name,
            "password": this.signUpForm.value.password,
        }).subscribe((data) => {
            this.loading = false;
            this.phoneNumberForm.enable();

            (data);
        }),
            err => {
                this.error = err.error.error;
                this.loading = false;
                this.phoneNumberForm.enable();

            }
        this.dialogRef.close();
    }


    public checkIsValid(controlName: string): boolean {
if(this.tab==1){
    return this.phoneNumberForm.get(controlName).hasError('required') && this.phoneNumberForm.get(controlName).touched;
}
    else if(this.tab==2) {
        return this.verificationForm.get(controlName).hasError('required') && this.verificationForm.get(controlName).touched;
    }

    else if (this.tab==3){
        return this.signUpForm.get(controlName).hasError('required') && this.signUpForm.get(controlName).touched;
    }
    }

    public showPassword():void{
        this.show =! this.show;
      }
}