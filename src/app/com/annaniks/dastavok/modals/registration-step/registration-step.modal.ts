import { Component, OnInit } from "@angular/core"
import { Validators, FormGroup, FormBuilder } from "@angular/forms"
import { SignUpService } from "../../services/signUp.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { ServerResponse, PhoneVerification, Verification } from "../../models/models";

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


    constructor(private _signUpService: SignUpService, private _cookieService: CookieService) { }

    ngOnInit() {
        this._formBuilder();

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
            confirm_password: ["", Validators.required],
        })
    }

    nextStep() {
        if (this.tab == 1) {
            this._clientPhoneNumber();
        }

        if (this.tab == 2) {
            this._clientVerification();
        }
        if (this.tab == 3) {
            this._signUpClient();
        }
        // this.tab += 1;

    }
    back() {
        this.tab = this.tab - 1;
    }

    private _clientPhoneNumber() {
      
        this._signUpService.clientPhoneNumber({
            "phoneNumber": this.phoneNumberForm.value.phonenumber,
        }).subscribe((data: ServerResponse<PhoneVerification>) => {
            this._formBuilderVerification();
            this.tab = this.tab + 1;
            this._cookieService.put('phone_token', data.data.token);
        });
    }

    private _clientVerification() {
       
        this.controlsItems = this.verificationForm.value.control_1 + this.verificationForm.value.control_2 +
            this.verificationForm.value.control_3 + this.verificationForm.value.control_4;
        this._signUpService.clientVerification({
            "phoneNumber": this.phoneNumberForm.value.phonenumber,
            "verifyCode": parseInt(this.controlsItems),
        }).subscribe((data: ServerResponse<Verification>) => {
            this._cookieService.put('verificationtoken', data.data.token)
            this._formBuilderSignUpForm();
            this.tab = this.tab + 1;
        })
    }

    private _signUpClient() {
        this._signUpService.signUpClient({
            "userName": this.signUpForm.value.user_name,
            "fullName": this.signUpForm.value.full_name,
            "password": this.signUpForm.value.password,

        }).subscribe((data) => {
            console.log(data);

        })
    }

}