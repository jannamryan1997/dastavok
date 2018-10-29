import { Component, OnInit } from "@angular/core"
import { MatDialog } from '@angular/material';
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

    constructor(public dialog: MatDialog, private _signUpService: SignUpService) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder() {
        this.newPasswordFormGroup = new FormBuilder().group({
            new_password: ["", Validators.required]
        })
    }

    public newPassword() {
        console.log("gfr");

        this._signUpService.newPassword({
            "password": this.newPasswordFormGroup.value.new_password
        }).subscribe((data: ServerResponse<Array<string>>) => {
            console.log(data);

        },
            err => {
                console.log(err);

            })
    }
}