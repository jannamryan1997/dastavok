import { Component, OnInit } from "@angular/core"
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpService } from "../../services/signUp.service";
import { ServerResponse } from "../../models/models";

@Component({
    selector: "app-newPassword",
    templateUrl: "new-password.modal.html",
    styleUrls: ["new-password.modal.scss"],
})

export class NewPasswordModals implements OnInit {

    public newPasswordFormGroup: FormGroup;
    public loading: boolean = false;
    public error: string;

    constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<NewPasswordModals>, private _signUpService: SignUpService) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder() {
        this.newPasswordFormGroup = new FormBuilder().group({
            new_password: ["", Validators.required]
        })
    }

    public newPassword() {
        this.loading = true;
        this.newPasswordFormGroup.disable();
        this._signUpService.newPassword({
            "password": this.newPasswordFormGroup.value.new_password
        }).subscribe((data: ServerResponse<Array<string>>) => {
            this.loading = false;
            this.newPasswordFormGroup.enable();
            this.dialogRef.close();
            (data);

        },
            err => {
                this.error = err.error.error;
                this.loading = false;
                this.newPasswordFormGroup.enable();
                (err);

            })
    }

    public checkIsValid(controlName): boolean {
        return this.newPasswordFormGroup.get(controlName).hasError('required') && this.newPasswordFormGroup.get(controlName).touched;
    }
}