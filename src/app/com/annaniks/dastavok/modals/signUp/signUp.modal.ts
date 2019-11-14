import { Component, OnInit, Inject } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { SignUpService } from "../../services/signUp.service";
import { MessageService } from "primeng/api";
import { PhoneNumberModal } from "../phone-number/phone-number.modal";

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
    public loading: boolean = false;
    public error: string;
    public show: boolean = false;
    public showConfirmPassword: boolean = false;

    constructor(private dialogRef: MatDialogRef<SignUpModal>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private _signUpService: SignUpService,
        private _dialog: MatDialog,
        private _messageService: MessageService,
        private _dialogRef:MatDialog,
        ) { }

    ngOnInit() {
        this._formBuilder()


    }
    private _matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
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

    private _formBuilder() {
        this.signUpForm = new FormBuilder().group({
            user_name: ["", Validators.required],
            full_name: ["", Validators.required],
            password: ["", Validators.required],
            confirm_password: ["", Validators.required],
        },
            { validator: this._matchingPasswords('password', 'confirm_password') }
        )
    }

    public backVerificationModal() {
        this.dialogRef.close();
        this._dialog.open(PhoneNumberModal,{
            width: "686px",
            maxWidth: '100vw',
        })
    }

    public signUpClient(): void {
        this.loading = true;
        this.signUpForm.disable();
        this._signUpService.signUpClient({
            "userName": this.signUpForm.value.user_name,
            "fullName": this.signUpForm.value.full_name,
            "password": this.signUpForm.value.password,
        }).subscribe((data) => {
            this.loading = false;
            this.signUpForm.enable();
            this._messageService.add({ severity: 'success', summary: 'Server message', detail: 'Registration Completed' })
            this._dialog.closeAll();
        }, err => {
            if (err && err.error && err.error.error)
                this.error = err.error.error;
            this.loading = false;
            this.signUpForm.enable();

        })
    }

    public checkIsValid(controlName: string): boolean {
        return this.signUpForm.get(controlName).hasError('required') && this.signUpForm.get(controlName).touched;
    }

    public showPassword(tab): void {
        if (tab == 1) {
            this.show = !this.show;
        }
        if (tab == 2) {
            this.showConfirmPassword = !this.showConfirmPassword;
        }
    }

}